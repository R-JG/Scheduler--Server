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

const remove = async (schedulerEventId: string): Promise<SchedulerEvent | null> => {
    const deleteResult = await SchedulerEventModel.findByIdAndDelete(schedulerEventId);
    return deleteResult;
};

const update = async (
        schedulerEventId: string, 
        schedulerEventUpdate: NewSchedulerEvent
    ): Promise<SchedulerEvent | null> => {
    const updateResult = await SchedulerEventModel.findByIdAndUpdate(
        schedulerEventId, schedulerEventUpdate, { new: true }
    );
    return updateResult;
};

export default { getAll, create, remove, update };