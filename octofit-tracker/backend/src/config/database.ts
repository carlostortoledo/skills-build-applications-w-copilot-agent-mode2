import mongoose from 'mongoose';

const db = mongoose.connection;

const connectDatabase = async () => {
  const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

  try {
    await mongoose.connect(connectionString);
    console.log('Connected to octofit_db');
  } catch (error) {
    console.error('Error connecting to octofit_db:', error);
    process.exit(1);
  }
};

db.on('error', console.error.bind(console, 'connection error:'));

export { connectDatabase };
export default db;
