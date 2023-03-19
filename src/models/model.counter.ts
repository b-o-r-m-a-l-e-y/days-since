export interface Counter {
    id: string;
    title: string;
    lastDate: Date;
}

export function getDaysPast(lastDate: Date) {
    var currentDate = new Date();
    var Difference_In_Time = currentDate.getTime() - lastDate.getTime();
    return Math.round(Difference_In_Time / (1000 * 3600 * 24));
}

export function formatDate(date: Date) : string {
    return `${date.getDate()}_${date.getMonth()}_${date.getFullYear()}`;
}