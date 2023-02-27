export interface Event {
    eventId: string,
    title: string,
    description: string,
    color: string,
    startMilliseconds: number,
    endMilliseconds: number
};

export type NewEvent = Omit<Event, 'eventId'>;