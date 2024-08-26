import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const mongoConnect = async () => {
  // Connect to MongoDB
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error('Database URL is not found in .env file');
    }
    const connection = await mongoose.connect(process.env.DATABASE_URL);
    console.log('DB connected successfully');
    return connection;
  } catch (error) {
    console.error('Connection to db failed: ', (error as Error).message);
  }
};

export default mongoConnect;
