import mongoose from 'mongoose';

const mediaSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  sizeBytes: {
    type: Number,
    required: true
  },
  mimetype: {
    type: String,
    required: true
  },
  storageType: {
    type: String,
    enum: ['local', 'cloudinary'],
    default: 'local'
  },
  publicId: {
    type: String
  }
}, {
  timestamps: true
});

const Media = mongoose.model('Media', mediaSchema);
export default Media;
