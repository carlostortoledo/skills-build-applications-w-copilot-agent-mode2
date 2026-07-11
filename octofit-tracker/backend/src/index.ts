import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { connectDatabase } from './config/database';
import { HOST, PORT } from './config/runtime';
import activitiesRouter from './routes/activities';
import leaderboardRouter from './routes/leaderboard';
import { getPublicApiUrl } from './server';
import teamsRouter from './routes/teams';
import usersRouter from './routes/users';
import workoutsRouter from './routes/workouts';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

void connectDatabase();

app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    port: PORT,
    publicUrl: getPublicApiUrl(),
  });
});

app.listen(PORT, HOST, () => {
  console.log(`Backend API running on port ${PORT}`);
  console.log(`Public API URL: ${getPublicApiUrl()}`);
});
