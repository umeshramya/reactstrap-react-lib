/**
 * This oclass deals with maniplitation of time and date
 */
export default class Moment {
    private _date;
    get date(): Date;
    set date(value: Date);
    constructor(date?: Date);
    /**
     * convert the utc date and time to local time using system timezone offset
     * @param date UTC dateand time
     * @returns date and time local timezone
     */
    setSystemTimeZoneToUTC: (date?: Date) => Moment;
    /**
     * This is for cvonverting system Date and Time to UTC using offset
     * @param date system Time
     * @returns UTC Date and Time
     */
    setUtcToSystemTimeZone: (date?: Date) => Moment;
    /**
     * Converts the Date to date base storable format string 'YYYY-MM-DD hh:mm:ss[.fraction]'
     * @param _date date to converted default instance date
     * @returns string 'YYYY-MM-DD hh:mm:ss[.fraction]'
     */
    convertToDataBaseString(_date?: Date): string;
}
//# sourceMappingURL=index.d.ts.map