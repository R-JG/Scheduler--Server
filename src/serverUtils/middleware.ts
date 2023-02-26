import logger from './logger';
import { Request, Response, NextFunction } from 'express';

const requestLogger = (request: Request, _response: Response, next: NextFunction) => {
    logger.info('------- Request -------');
    logger.info('Method: ', request.method);
    logger.info('Path: ', request.path);
    logger.info('Body: ', request.body);
    logger.info('-----------------------');
    next();
};

const unknownEndpoint = (_request: Request, response: Response) => {
    response.status(404).json({ error: 'unknown endpoint' });
};

const errorHandler = (error: any, _request: Request, response: Response, next: NextFunction) => {

    // update the error handler to handle with more specificity

    console.error(error);
    response.status(400).json({ error: error.message });
    next(error);
};

export default { requestLogger, unknownEndpoint, errorHandler };