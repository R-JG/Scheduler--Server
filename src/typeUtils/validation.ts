import { NewEvent } from './types';

const isString = (params: unknown): params is string => {
    return ((typeof params === 'string') || (params instanceof String));
};

const isNumber = (params: unknown): params is number => {
    return ((typeof params === 'number') || (params instanceof Number));
};

const parseStringProp = (prop: unknown): string => {
    if (!isString(prop)) {
        throw new Error('property is incorrect type');
    };
    return prop;
};

const parseNumberProp = (prop: unknown): number => {
    if (!isNumber(prop)) {
        throw new Error('property is incorrect type');
    };
    return prop;
};

const parseNewEvent = (params: unknown): NewEvent => {
    if (!params || typeof params !== 'object') {
        throw new Error('incorrect of missing data');
    };
    if (!(('title' in params) 
    && ('description' in params) 
    && ('startMilliseconds' in params) 
    && ('endMilliseconds' in params))) {
        throw new Error('some properties are missing');
    };
    const newEvent = {
        title: parseStringProp(params.title),
        description: parseStringProp(params.description),
        startMilliseconds: parseNumberProp(params.startMilliseconds),
        endMilliseconds: parseNumberProp(params.endMilliseconds)
    };
    return newEvent;
};

export default { parseNewEvent };