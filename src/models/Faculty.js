import mongoose from 'mongoose';

const facultySchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  department: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export const Faculty = mongoose.model('Faculty', facultySchema);