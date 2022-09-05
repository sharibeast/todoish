import mongoose, { mongo } from 'mongoose';
import config from 'config';
import logger from './logger';

export default async function connect() {
  const dbUri = config.get<string>('dbUri');

  try {
    await mongoose.connect(dbUri);
    logger.info('database is connected');
  } catch (error) {
    logger.error('Could not connect to db');
    process.exit(1);
  }
}
