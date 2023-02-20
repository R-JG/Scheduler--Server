import { SchedulerEvent } from '../../typeUtils/types';
import SchedulerEventModel from '../models/SchedulerEvent';

const getAll = async (): Promise<SchedulerEvent[]> => {
    return await SchedulerEventModel.find({});
};

export default { getAll };