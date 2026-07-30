import mongoose from 'mongoose';

const sectionSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, required: true },
  facultyId: { type: mongoose.Schema.Types.ObjectId, required: true },
  sectionNumber: { type: String, required: true },
  semester: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export const Section = mongoose.model('Section', sectionSchema);