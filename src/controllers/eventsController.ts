import { Request, Response, NextFunction } from 'express';
import validation from '../typeUtils/validation';
import eventService from '../database/services/eventService';

const getAll = async (
        _request: Request, 
        response: Response,
        next: NextFunction
    ): Promise<void> => {
    try {
        const allEvents = await eventService.getAll();
        response.json(allEvents);        
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
        const newEvent = validation.parseNewEvent(request.body);
        const savedEvent = await eventService.create(newEvent);
        response.json(savedEvent);
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
        const deleteResult = await eventService.remove(id);
        if (deleteResult) {
            response.json(deleteResult);
        } else {
            response.status(404).send('event not found');
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
        const eventUpdate = validation.parseNewEvent(request.body);
        const updateResult = await eventService.update(id, eventUpdate);
        if (updateResult) {
            response.json(updateResult);
        } else {
            response.status(404).send('event not found');
        };
    } catch (error) {
        next(error);
    };
};

export default { getAll, create, remove, update };