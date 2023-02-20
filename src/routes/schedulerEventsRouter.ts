import express from 'express';
import schedulerEventsController from '../controllers/schedulerEventsController';

const router = express.Router();

router.get('/', async (_request, response) => {
    const allSchedulerEvents = await schedulerEventsController.getAll();
    response.json(allSchedulerEvents);
});

export default router;