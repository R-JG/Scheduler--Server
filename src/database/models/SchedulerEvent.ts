import mongoose, { Schema, Document } from 'mongoose';
import { SchedulerEvent } from '../../typeUtils/types';

interface SchedulerEventDocumentModel extends SchedulerEvent, Document {};

const schedulerEventSchema: Schema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
    startMilliseconds: {type: Number, required: true },
    endMilliseconds: {type: Number, required: true }
});

const SchedulerEventModel = mongoose.model<SchedulerEventDocumentModel>(
    'SchedulerEvent', schedulerEventSchema
);

export default SchedulerEventModel;