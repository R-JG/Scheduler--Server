import express from 'express';
import middleware from './serverUtils/middleware';
import connectDatabase from './database/connectDatabase';
import eventsRouter from './routes/eventsRouter';

connectDatabase();

const app = express();

app.use(express.static('./build/client/dist'));
app.use(express.json());
app.use(middleware.requestLogger);

app.use('/api/events', eventsRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

export default app;