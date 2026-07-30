import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectToMongo } from './db.js';
import studentsRouter from './routes/students.js';
import coursesRouter from './routes/courses.js';
import facultyRouter from './routes/faculty.js';
import sectionsRouter from './routes/sections.js';
import enrollmentsRouter from './routes/enrollments.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => res.json({ ok: true }));

app.use('/api', studentsRouter);
app.use('/api', coursesRouter);
app.use('/api', facultyRouter);
app.use('/api', sectionsRouter);
app.use('/api', enrollmentsRouter);

const port = process.env.PORT || 3000;

connectToMongo(process.env.MONGO_URL, process.env.MONGO_DB)
  .then(() => {
    app.listen(port, () => console.log(`API listening on http://localhost:${port}`));
  })
  .catch((err) => console.error('Mongo connection failed:', err.message));