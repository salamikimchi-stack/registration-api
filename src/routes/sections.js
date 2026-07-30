import { Router } from 'express';
import { Section } from '../models/Section.js';

const router = Router();

router.post('/sections', async (req, res) => {
  try {
    const section = await Section.create(req.body);
    res.status(201).json(section);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/sections', async (req, res) => {
  const sections = await Section.find();
  res.json(sections);
});

router.get('/sections/:id', async (req, res) => {
  const section = await Section.findById(req.params.id);
  if (!section) return res.status(404).json({ error: 'Section not found' });
  res.json(section);
});

router.put('/sections/:id', async (req, res) => {
  try {
    const updated = await Section.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Section not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/sections/:id', async (req, res) => {
  const deleted = await Section.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ error: 'Section not found' });
  res.json({ deleted });
});

export default router;