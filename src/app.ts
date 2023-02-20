import express from 'express';
import middleware from './serverUtils/middleware';
import connectDatabase from './database/connectDatabase';
import schedulerEventsRouter from './routes/schedulerEventsRouter';

connectDatabase();

const app = express();

app.use(express.json());
app.use(middleware.requestLogger);

app.use('/api/scheduler-events', schedulerEventsRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

export default app;