import fs from 'fs';
import path from 'path';
import { prisma } from '../config/db.js';
import { supabase, SUPABASE_BUCKET } from '../services/supabase.js';

// @desc    Upload media item to Supabase Storage
// @route   POST /api/media/upload
// @access  Private
export const uploadMedia = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file uploaded.' });
  }

  try {
    const fileBuffer = fs.readFileSync(req.file.path);
    const uniqueFilename = `${Date.now()}-${req.file.originalname.replace(/\s+/g, '_')}`;

    console.log(`Uploading file ${uniqueFilename} to Supabase Storage Bucket: ${SUPABASE_BUCKET}...`);
    
    // Upload buffer to Supabase Storage Bucket
    const { data, error } = await supabase.storage
      .from(SUPABASE_BUCKET)
      .upload(uniqueFilename, fileBuffer, {
        contentType: req.file.mimetype,
        cacheControl: '3600',
        upsert: true
      });

    // Cleanup local temp file
    if (fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }

    if (error) {
      console.error('Supabase upload error:', error.message);
      return res.status(500).json({ success: false, message: `Storage upload failed: ${error.message}` });
    }

    // Retrieve public URL
    const { data: publicUrlData } = supabase.storage
      .from(SUPABASE_BUCKET)
      .getPublicUrl(uniqueFilename);

    const publicUrl = publicUrlData.publicUrl;

    // Save record to database using Prisma
    const media = await prisma.mediaItem.create({
      data: {
        filename: req.file.originalname,
        url: publicUrl,
        sizeBytes: req.file.size,
        mimetype: req.file.mimetype,
        storageType: 'supabase',
        publicId: uniqueFilename // Stored as the path key to delete from bucket
      }
    });

    return res.status(201).json({ success: true, media });
  } catch (error) {
    // Cleanup local file on error
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    console.error(`Media upload error: ${error.message}`);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all media items
// @route   GET /api/media
// @access  Private
export const getMedia = async (req, res) => {
  try {
    const { search, type } = req.query;

    const queryConditions = {};

    if (search) {
      queryConditions.filename = {
        contains: search,
        mode: 'insensitive'
      };
    }

    if (type) {
      if (type === 'image') {
        queryConditions.mimetype = { startsWith: 'image/' };
      } else if (type === 'video') {
        queryConditions.mimetype = { startsWith: 'video/' };
      } else if (type === 'pdf') {
        queryConditions.mimetype = 'application/pdf';
      }
    }

    const mediaList = await prisma.mediaItem.findMany({
      where: queryConditions,
      orderBy: { createdAt: 'desc' }
    });

    // Map _id for frontend compatibility
    const formattedList = mediaList.map(item => ({
      ...item,
      _id: item.id
    }));

    res.json({ success: true, media: formattedList });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete media item from database and Supabase Storage
// @route   DELETE /api/media/:id
// @access  Private
export const deleteMedia = async (req, res) => {
  try {
    const media = await prisma.mediaItem.findUnique({
      where: { id: req.params.id }
    });

    if (!media) {
      return res.status(404).json({ success: false, message: 'Media file not found.' });
    }

    // Clean up Supabase bucket objects
    if (media.storageType === 'supabase' && media.publicId) {
      console.log(`Removing ${media.publicId} from Supabase Storage bucket...`);
      const { error } = await supabase.storage
        .from(SUPABASE_BUCKET)
        .remove([media.publicId]);
        
      if (error) {
        console.warn(`Warning: failed to delete storage object from Supabase bucket: ${error.message}`);
      }
    }

    // Delete database entry
    await prisma.mediaItem.delete({
      where: { id: req.params.id }
    });

    res.json({ success: true, message: 'Media file deleted from database and Supabase storage.' });
  } catch (error) {
    console.error(`Delete media error: ${error.message}`);
    res.status(500).json({ success: false, message: error.message });
  }
};
