import { Schema, model } from 'mongoose';

const leaderboardSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    teamId: { type: Schema.Types.ObjectId, ref: 'Team', default: null },
    points: { type: Number, default: 0, min: 0 },
    rank: { type: Number, default: 1, min: 1 },
    period: { type: String, default: 'weekly', trim: true },
  },
  { timestamps: true },
);

const LeaderboardEntry = model('LeaderboardEntry', leaderboardSchema);

export default LeaderboardEntry;