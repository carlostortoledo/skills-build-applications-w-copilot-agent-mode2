import { Schema, model } from 'mongoose';

const workoutSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    focusArea: { type: String, required: true, trim: true },
    durationMinutes: { type: Number, default: 30, min: 0 },
    difficulty: {
      type: String,
      default: 'beginner',
      enum: ['beginner', 'intermediate', 'advanced'],
    },
    equipment: [{ type: String, trim: true }],
  },
  { timestamps: true },
);

const Workout = model('Workout', workoutSchema);

export default Workout;