import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  client: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['web', 'mobile', 'ai', 'saas', 'branding'],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  longDescription: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  gallery: [{
    type: String
  }],
  tags: [{
    type: String
  }],
  stats: [{
    label: { type: String },
    value: { type: String }
  }],
  testimonial: {
    name: { type: String },
    role: { type: String },
    text: { type: String },
    avatar: { type: String }
  },
  beforeImage: {
    type: String
  },
  afterImage: {
    type: String
  },
  featured: {
    type: Boolean,
    default: false
  },
  url: {
    type: String
  }
}, {
  timestamps: true
});

const Project = mongoose.model('Project', projectSchema);
export default Project;
