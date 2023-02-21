import { Request, Response, NextFunction } from 'express';
import validation from '../typeUtils/validation';
import schedulerEventService from '../database/services/schedulerEventService';

const getAll = async (
        _request: Request, 
        response: Response,
        next: NextFunction
    ): Promise<void> => {
    try {
        const allSchedulerEvents = await schedulerEventService.getAll();
        response.json(allSchedulerEvents);        
    } catch (error) {
        next(error);
    };
};

const create = async (
        request: Request<{}, {}, unknown>, 
        response: Response,
        next: NextFunction
    ): Promise<void> => {
    try {
        const newSchedulerEvent = validation.parseNewSchedulerEvent(request.body);
        const savedSchedulerEvent = await schedulerEventService.create(newSchedulerEvent);
        response.json(savedSchedulerEvent);
    } catch (error) {
        next(error);
    };
};

const remove = async (
        request: Request<{id: string}>, 
        response: Response,
        next: NextFunction
    ): Promise<void> => {
    try {
        const id = request.params.id;
        const deleteResult = await schedulerEventService.remove(id);
        if (deleteResult) {
            response.json(deleteResult);
        } else {
            response.status(404).send('scheduler event not found');
        };
    } catch (error) {
        next(error);
    };
};

const update = async (
        request: Request<{id: string}, {}, unknown>,
        response: Response,
        next: NextFunction
    ): Promise<void> => {
    try {
        const id = request.params.id;
        const schedulerEventUpdate = validation.parseNewSchedulerEvent(request.body);
        const updateResult = await schedulerEventService.update(id, schedulerEventUpdate);
        if (updateResult) {
            response.json(updateResult);
        } else {
            response.status(404).send('scheduler event not found');
        };
    } catch (error) {
        next(error);
    };
};

export default { getAll, create, remove, update };