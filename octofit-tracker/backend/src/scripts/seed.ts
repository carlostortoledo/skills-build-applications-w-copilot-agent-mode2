import mongoose from 'mongoose';

import Activity from '../models/activity';
import LeaderboardEntry from '../models/leaderboard';
import Team from '../models/team';
import User from '../models/user';
import Workout from '../models/workout';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

// Seed the octofit_db database with test data
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Team.deleteMany({}),
      User.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const teams = await Team.create([
      {
        name: 'Summit Striders',
        description: 'High-energy runners and cyclists chasing weekly mileage goals.',
      },
      {
        name: 'Core Crushers',
        description: 'Strength-focused athletes building consistency and power.',
      },
    ]);

    const users = await User.create([
      {
        name: 'Ava Martinez',
        email: 'ava.martinez@octofit.test',
        teamId: teams[0]._id,
        avatarUrl: 'https://images.example.com/ava-martinez.png',
      },
      {
        name: 'Marcus Chen',
        email: 'marcus.chen@octofit.test',
        teamId: teams[0]._id,
        avatarUrl: 'https://images.example.com/marcus-chen.png',
      },
      {
        name: 'Jasmine Patel',
        email: 'jasmine.patel@octofit.test',
        teamId: teams[1]._id,
        avatarUrl: 'https://images.example.com/jasmine-patel.png',
      },
    ]);

    teams[0].memberIds = [users[0]._id, users[1]._id];
    teams[1].memberIds = [users[2]._id];
    await Promise.all([teams[0].save(), teams[1].save()]);

    await Activity.create([
      {
        userId: users[0]._id,
        teamId: teams[0]._id,
        type: 'Morning run',
        durationMinutes: 42,
        caloriesBurned: 410,
        occurredAt: new Date('2026-07-10T07:00:00.000Z'),
        notes: 'Felt strong on the final hill repeats.',
      },
      {
        userId: users[1]._id,
        teamId: teams[0]._id,
        type: 'Indoor cycling',
        durationMinutes: 35,
        caloriesBurned: 360,
        occurredAt: new Date('2026-07-10T18:30:00.000Z'),
        notes: 'Recovery ride after a long workday.',
      },
      {
        userId: users[2]._id,
        teamId: teams[1]._id,
        type: 'Strength circuit',
        durationMinutes: 50,
        caloriesBurned: 430,
        occurredAt: new Date('2026-07-10T12:15:00.000Z'),
        notes: 'Completed all sets with controlled tempo.',
      },
    ]);

    await LeaderboardEntry.create([
      {
        userId: users[0]._id,
        teamId: teams[0]._id,
        points: 320,
        rank: 1,
        period: 'weekly',
      },
      {
        userId: users[2]._id,
        teamId: teams[1]._id,
        points: 295,
        rank: 2,
        period: 'weekly',
      },
      {
        userId: users[1]._id,
        teamId: teams[0]._id,
        points: 260,
        rank: 3,
        period: 'weekly',
      },
    ]);

    await Workout.create([
      {
        title: 'Full Body Starter Flow',
        focusArea: 'mobility',
        durationMinutes: 20,
        difficulty: 'beginner',
        equipment: ['Yoga mat'],
      },
      {
        title: 'Interval Engine Builder',
        focusArea: 'cardio',
        durationMinutes: 30,
        difficulty: 'intermediate',
        equipment: ['Treadmill', 'Timer'],
      },
      {
        title: 'Dumbbell Power Circuit',
        focusArea: 'strength',
        durationMinutes: 45,
        difficulty: 'advanced',
        equipment: ['Dumbbells', 'Bench'],
      },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
