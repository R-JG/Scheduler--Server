import express from 'express';
import eventsController from '../controllers/eventsController';

const router = express.Router();

router.get('/', eventsController.getAll);

router.post('/', eventsController.create);

router.delete('/:id', eventsController.remove);

router.put('/:id', eventsController.update);

export default router;