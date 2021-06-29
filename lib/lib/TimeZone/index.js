"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This oclass deals with maniplitation of time and date
 */
class TimeZone {
    /**
     * This create Times zone with date and time set to UTC
     */
    constructor() {
        /**
         *
         * This converts the class Date time to UTC
         * By default class time zoen is set to UTC
         *
         * @param date UTC dateand time
         * @returns date and time local timezone
         */
        this.setSystemTimeZoneToUTC = (date = this._date) => {
            let offset = date.getTimezoneOffset();
            this._date = new Date(date.getTime() + (offset * 60 * 1000));
            return this;
        };
        /**
         * This sets the date given or class private _date to system Time zone
         * @param date date time default class priavte property _date
         * @returns UTC Date and Time
         */
        this.setUTCToSystemTimeZone = (date = this._date) => {
            let offset = date.getTimezoneOffset() * -1;
            this._date = new Date(date.getTime() + (offset * 60 * 1000));
            return this;
        };
        this._date = new Date();
    }
    /**
     * Returns dateTime in UTC time zone
     */
    get date() {
        return this._date;
    }
    /**
     * sets DateTime UTC time zone
     * @returns TimZone
     */
    setDate(value) {
        this._date = value;
        return this;
    }
    /**
   * Converts the Date to date base storable format string 'YYYY-MM-DD hh:mm:ss[.fraction]'
   * @param _date date to converted default instance date
   * @returns string 'YYYY-MM-DD hh:mm:ss[.fraction]'
   */
    convertToDataBaseString(_date = this._date) {
        let ret = "";
        let dateString = _date.toISOString();
        ret = dateString.substring(0, 10) + " " + dateString.substring(11, dateString.length - 1);
        return ret.trim();
    }
}
exports.default = TimeZone;
//# sourceMappingURL=index.js.map