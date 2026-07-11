import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { connectDatabase } from './config/database';

dotenv.config();

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

void connectDatabase();

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Backend API running on port ${PORT}`);
});
