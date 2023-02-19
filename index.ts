import { PORT } from './src/expressUtils/config';
import logger from './src/expressUtils/logger';
import app from './src/app';

app.listen(PORT, () => {
    logger.info(`Server starting at port ${PORT}...`);
});