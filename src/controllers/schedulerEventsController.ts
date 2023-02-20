import { SchedulerEvent } from '../typeUtils/types';
import schedulerEventServices from '../database/services/schedulerEventServices';

const getAll = async (): Promise<SchedulerEvent[]> => {
    const allSchedulerEvents = await schedulerEventServices.getAll();

    console.log(allSchedulerEvents);
    
    return allSchedulerEvents;
};

export default { getAll };