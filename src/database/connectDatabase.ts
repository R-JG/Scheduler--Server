import mongoose from 'mongoose';
import { MONGO_URI } from '../serverUtils/config';
import logger from '../serverUtils/logger';

const connectDatabase = async () => {
    if (!MONGO_URI) {
        throw new Error('MongoDB uri is undefined');
    };
    logger.info('Connecting to MongoDB...');
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(MONGO_URI);
        logger.info('MongoDB connected');
    } catch (error) {
        logger.error('Error connecting to MongoDB');
    };
};

export default connectDatabase;