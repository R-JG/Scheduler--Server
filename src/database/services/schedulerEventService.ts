import { SchedulerEvent, NewSchedulerEvent } from '../../typeUtils/types';
import SchedulerEventModel from '../models/SchedulerEvent';

const getAll = async (): Promise<SchedulerEvent[]> => {
    const allSchedulerEvents = await SchedulerEventModel.find({});
    return allSchedulerEvents;
};

const create = async (params: NewSchedulerEvent): Promise<SchedulerEvent> => {
    const newSchedulerEvent = new SchedulerEventModel(params);
    const savedSchedulerEvent = await newSchedulerEvent.save();
    return savedSchedulerEvent;
};

export default { getAll, create };