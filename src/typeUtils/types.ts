export interface Event {
    eventId: string,
    title: string,
    description: string,
    startMilliseconds: number,
    endMilliseconds: number
};

export type NewEvent = Omit<Event, 'eventId'>;