import mongoose, { Schema, Document } from 'mongoose';
import { Event } from '../../typeUtils/types';

interface EventDocumentModel extends Event, Document {};

const eventSchema: Schema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
    color: { type: String, required: true },
    startMilliseconds: {type: Number, required: true },
    endMilliseconds: {type: Number, required: true }
});

eventSchema.set('toJSON', {
    transform: (_document, returnedObject) => {
        returnedObject.eventId = returnedObject._id;
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

const EventModel = mongoose.model<EventDocumentModel>(
    'Event', eventSchema
);

export default EventModel;