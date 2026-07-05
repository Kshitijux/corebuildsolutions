import mongoose from 'mongoose';

const faqSchema = new mongoose.Schema({
  q: {
    type: String,
    required: true
  },
  a: {
    type: String,
    required: true
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

const Faq = mongoose.model('Faq', faqSchema);
export default Faq;
