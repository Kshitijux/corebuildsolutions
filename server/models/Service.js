import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: 'Globe'
  },
  details: [{
    type: String
  }],
  workflow: [{
    step: { type: Number },
    title: { type: String },
    desc: { type: String }
  }],
  pricing: [{
    plan: { type: String },
    price: { type: String },
    features: [{ type: String }]
  }]
}, {
  timestamps: true
});

const Service = mongoose.model('Service', serviceSchema);
export default Service;
