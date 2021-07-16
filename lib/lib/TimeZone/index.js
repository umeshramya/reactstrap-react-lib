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
    /**
      *
      * @param dob date of birth
      * @returns age in days month or years
      */
    dobToAge(dob) {
        let ret = "";
        let curDate = new Date();
        let daysDiff = Math.abs(curDate.getTime() - dob.getTime()) / (1000 * 60 * 60 * 24);
        if (daysDiff < 2) {
            ret = `1 day`;
        }
        if (daysDiff < 30) {
            ret = `${daysDiff} days`;
        }
        else if (daysDiff < 60) {
            ret = `1 month`;
        }
        else if (daysDiff < 365) {
            ret = `${parseInt(`${daysDiff / 30}`)} months`;
        }
        else if (daysDiff < 730) {
            ret = `1 year`;
        }
        else {
            ret = `${parseInt(`${daysDiff / 365}`)} years`;
        }
        return ret;
    }
    /**
     * Approx date of birth  input is in years only not for those less than 1 year
     * @param age: number
     * @param type  : "Years" | "Months" | "Days"
     * @returns Date date of birth
     */
    ageToDob(age, type) {
        const milliday = 1000 * 60 * 60 * 24;
        let curMillsiseconds = new Date().getTime();
        let diffMiilisceonds = 0;
        if (type === "Years") {
            diffMiilisceonds = milliday * 365 * age;
        }
        else if (type === "Months") {
            diffMiilisceonds = milliday * 30 * age;
        }
        else {
            diffMiilisceonds = milliday * age;
        }
        return new Date(curMillsiseconds - diffMiilisceonds);
    }
}
exports.default = TimeZone;
//# sourceMappingURL=index.js.map