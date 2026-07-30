import { Router } from 'express';
import { Enrollment } from '../models/Enrollment.js';

const router = Router();

router.post('/enrollments', async (req, res) => {
  try {
    const enrollment = await Enrollment.create(req.body);
    res.status(201).json(enrollment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/enrollments', async (req, res) => {
  const enrollments = await Enrollment.find();
  res.json(enrollments);
});

router.get('/enrollments/:id', async (req, res) => {
  const enrollment = await Enrollment.findById(req.params.id);
  if (!enrollment) return res.status(404).json({ error: 'Enrollment not found' });
  res.json(enrollment);
});

router.put('/enrollments/:id', async (req, res) => {
  try {
    const updated = await Enrollment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Enrollment not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/enrollments/:id', async (req, res) => {
  const deleted = await Enrollment.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ error: 'Enrollment not found' });
  res.json({ deleted });
});

export default router;