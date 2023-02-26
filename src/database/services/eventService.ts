import { Event, NewEvent } from '../../typeUtils/types';
import EventModel from '../models/Event';

const getAll = async (): Promise<Event[]> => {
    const allEvents = await EventModel.find({});
    return allEvents;
};

const create = async (params: NewEvent): Promise<Event> => {
    const newEvent = new EventModel(params);
    const savedEvent = await newEvent.save();
    return savedEvent;
};

const remove = async (eventId: string): Promise<Event | null> => {
    const deleteResult = await EventModel.findByIdAndDelete(eventId);
    return deleteResult;
};

const update = async (eventId: string, eventUpdate: NewEvent): Promise<Event | null> => {
    const updateResult = await EventModel.findByIdAndUpdate(
        eventId, eventUpdate, { new: true }
    );
    return updateResult;
};

export default { getAll, create, remove, update };