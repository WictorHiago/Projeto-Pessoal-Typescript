import mongoose from 'mongoose';
import config from 'config';
import Logger from '../config/logger';

async function connect() {
    const dbUri = config.get<string>('dbUri');

    try {
        await mongoose.connect(dbUri);
        Logger.info('Connected to database ' + dbUri);
    } catch (err) {
        Logger.error('Error connecting to database mongodb');
        Logger.error('Error: ' + err);
        process.exit(1);
    }
}

export default connect();
