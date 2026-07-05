import mongoose from 'mongoose';

const settingsSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    default: 'global',
    unique: true
  },
  agencyName: {
    type: String,
    required: true
  },
  contactEmail: {
    type: String,
    required: true
  },
  contactPhone: {
    type: String,
    required: true
  },
  whatsappNumber: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  socialLinks: {
    twitter: { type: String },
    linkedin: { type: String },
    github: { type: String },
    instagram: { type: String }
  }
}, {
  timestamps: true
});

const Settings = mongoose.model('Settings', settingsSchema);
export default Settings;
