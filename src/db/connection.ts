//IMPORT MONGOOSE
import mongoose, { Model } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

export const connect = async () => {
  const conn = await mongoose
    .connect(MONGODB_URI as string)
    .catch((err) => console.log(err));
  console.log('Mongoose Connection Established');

  // const Todo = mongoose.models.Todo || mongoose.model('Todo', TodoSchema);

  return { conn };
};
