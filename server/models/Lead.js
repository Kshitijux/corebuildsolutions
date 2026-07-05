import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  company: {
    type: String
  },
  subject: {
    type: String
  },
  message: {
    type: String,
    required: true
  },
  service: {
    type: String
  },
  date: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'unread'
  },
  source: {
    type: String,
    required: true
  },
  ip: {
    type: String
  }
}, {
  timestamps: true
});

const Lead = mongoose.model('Lead', leadSchema);
export default Lead;
