import { Schema, model } from 'mongoose';

const activitySchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    teamId: { type: Schema.Types.ObjectId, ref: 'Team', default: null },
    type: { type: String, required: true, trim: true },
    durationMinutes: { type: Number, default: 30, min: 0 },
    caloriesBurned: { type: Number, default: 0, min: 0 },
    occurredAt: { type: Date, default: Date.now },
    notes: { type: String, default: '' },
  },
  { timestamps: true },
);

const Activity = model('Activity', activitySchema);

export default Activity;