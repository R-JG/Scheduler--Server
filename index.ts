import { PORT } from './src/serverUtils/config';
import logger from './src/serverUtils/logger';
import app from './src/app';

app.listen(PORT, () => {
    logger.info(`Server starting at port ${PORT}...`);
});