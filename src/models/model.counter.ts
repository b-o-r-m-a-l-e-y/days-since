export interface Counter {
    id: string;
    title: string;
    lastDate: Date;
}

export function getDaysPast(counter: Counter) {
    var currentDate = new Date();
    var Difference_In_Time = currentDate.getTime() - counter.lastDate.getTime();
    return Math.round(Difference_In_Time / (1000 * 3600 * 24));
}

export function updateCounterModel(counter: Counter) {
    counter.lastDate = new Date();
    getDaysPast(counter);
}

export function getEventOccured(counter: Counter) : string {
    return `${counter.lastDate.getDate()}_${counter.lastDate.getMonth()}_${counter.lastDate.getFullYear()}`;
}