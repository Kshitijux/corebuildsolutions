import mongoose from 'mongoose';

const teamMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  experience: {
    type: String
  },
  skills: [{
    type: String
  }],
  order: {
    type: Number,
    default: 0
  },
  active: {
    type: Boolean,
    default: true
  },
  socials: {
    twitter: { type: String },
    linkedin: { type: String },
    github: { type: String }
  }
}, {
  timestamps: true
});

const TeamMember = mongoose.model('TeamMember', teamMemberSchema);
export default TeamMember;
