import { Request, Response } from 'express';
import validation from '../typeUtils/validation';
import schedulerEventService from '../database/services/schedulerEventService';

const getAll = async (_request: Request, response: Response): Promise<void> => {
    const allSchedulerEvents = await schedulerEventService.getAll();
    response.json(allSchedulerEvents);
};

const create = async (request: Request<{}, {}, unknown>, response: Response): Promise<void> => {
    const newSchedulerEvent = validation.parseNewSchedulerEvent(request.body);
    const savedSchedulerEvent = await schedulerEventService.create(newSchedulerEvent);
    response.json(savedSchedulerEvent);
};

export default { getAll, create };