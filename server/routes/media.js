import express from 'express';
import { 
  uploadMedia, 
  getMedia, 
  deleteMedia 
} from '../controllers/media.js';
import { protect } from '../middleware/auth.js';
import upload from '../middleware/upload.js';

const router = express.Router();

router.post('/upload', protect, upload.single('file'), uploadMedia);
router.get('/', protect, getMedia);
router.delete('/:id', protect, deleteMedia);

export default router;
