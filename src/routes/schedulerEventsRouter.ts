import express from 'express';
import schedulerEventsController from '../controllers/schedulerEventsController';

const router = express.Router();

router.get('/', schedulerEventsController.getAll);

router.post('/', schedulerEventsController.create);

export default router;