import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    teamId: { type: Schema.Types.ObjectId, ref: 'Team', default: null },
    avatarUrl: { type: String, default: '' },
  },
  { timestamps: true },
);

const User = model('User', userSchema);

export default User;