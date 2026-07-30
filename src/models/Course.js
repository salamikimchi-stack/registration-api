import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  courseCode: { type: String, required: true },
  title: { type: String, required: true },
  credits: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

export const Course = mongoose.model('Course', courseSchema);