import mongoose from 'mongoose';

export async function connectToMongo(url, dbName) {
  await mongoose.connect(url, { dbName });
  console.log(`Connected to MongoDB database: ${dbName}`);
}