import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  major: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export const Student = mongoose.model('Student', studentSchema);