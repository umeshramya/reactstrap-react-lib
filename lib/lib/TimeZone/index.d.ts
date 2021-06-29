/**
 * This oclass deals with maniplitation of time and date
 */
export default class TimeZone {
    private _date;
    /**
     * Returns dateTime in UTC time zone
     */
    get date(): Date;
    /**
     * sets DateTime UTC time zone
     * @returns TimZone
     */
    setDate(value: Date): TimeZone;
    /**
     * This create Times zone with date and time set to UTC
     */
    constructor();
    /**
   * Converts the Date to date base storable format string 'YYYY-MM-DD hh:mm:ss[.fraction]'
   * @param _date date to converted default instance date
   * @returns string 'YYYY-MM-DD hh:mm:ss[.fraction]'
   */
    convertToDataBaseString(_date?: Date): string;
    /**
     * This is private meththod
     * @deprecated
     * @param date UTC dateand time
     * @returns date and time local timezone
     */
    setSystemTimeZoneToUTC: (date?: Date) => TimeZone;
    /**
     * This sets the date given or class private _date to system Time zone
     * @param date date time default class priavte property _date
     * @returns UTC Date and Time
     */
    setUTCToSystemTimeZone: (date?: Date) => TimeZone;
}
//# sourceMappingURL=index.d.ts.map