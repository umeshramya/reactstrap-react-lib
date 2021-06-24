/**
 * This oclass deals with maniplitation of time and date
 */
export default class Moment extends Date {
    private date;
    get _date(): Date;
    constructor(date?: Date);
    /**
     * convert the utc date and time to local time using system timezone offset
     * @param date UTC dateand time
     * @returns date and time local timezone
     */
    _getSystemTimezoneDateTime: (date?: Date) => Date;
    /**
     * This is for cvonverting system Date and Time to UTC using offset
     * @param date system Time
     * @returns UTC Date and Time
     */
    _getUTCDateTime: (date?: Date) => Date;
    /**
     * Converts the Date to date base storable format string 'YYYY-MM-DD hh:mm:ss[.fraction]'
     * @param _date date to converted default instance date
     * @returns string 'YYYY-MM-DD hh:mm:ss[.fraction]'
     */
    _convertToDataBaseString(_date?: Date): string;
}
//# sourceMappingURL=index.d.ts.map