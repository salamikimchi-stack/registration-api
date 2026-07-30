import { Router } from 'express';
import { Faculty } from '../models/Faculty.js';

const router = Router();

router.post('/faculty', async (req, res) => {
  try {
    const faculty = await Faculty.create(req.body);
    res.status(201).json(faculty);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/faculty', async (req, res) => {
  const facultyList = await Faculty.find();
  res.json(facultyList);
});

router.get('/faculty/:id', async (req, res) => {
  const faculty = await Faculty.findById(req.params.id);
  if (!faculty) return res.status(404).json({ error: 'Faculty not found' });
  res.json(faculty);
});

router.put('/faculty/:id', async (req, res) => {
  try {
    const updated = await Faculty.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Faculty not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/faculty/:id', async (req, res) => {
  const deleted = await Faculty.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ error: 'Faculty not found' });
  res.json({ deleted });
});

export default router;