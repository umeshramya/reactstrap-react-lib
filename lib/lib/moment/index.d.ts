/**
 * This oclass deals with maniplitation of time and date
 */
export default class Moment extends Date {
    _date: Date;
    constructor(date?: Date);
    /**
     * convert the utc date and time to local time using system timezone offset
     * @param date UTC dateand time
     * @returns date and time local timezone
     */
    getSystemTimezoneDateTime: (date?: Date) => Date;
    /**
     * This is for cvonverting system Date and Time to UTC using offset
     * @param date system Time
     * @returns UTC Date and Time
     */
    getUTCDateTime: (date?: Date) => Date;
    convertToDataBaseString(_date: Date): string;
}
//# sourceMappingURL=index.d.ts.map