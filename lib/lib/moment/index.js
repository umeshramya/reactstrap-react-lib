"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This oclass deals with maniplitation of time and date
 */
class Moment {
    constructor(date = new Date()) {
        /**
         * convert the utc date and time to local time using system timezone offset
         * @param date UTC dateand time
         * @returns date and time local timezone
         */
        this.setSystemTimeZoneToUTC = (date = this._date) => {
            let offset = date.getTimezoneOffset();
            this._date = new Date(date.getTime() + (offset * 60 * 1000));
            return this;
        };
        /**
         * This is for cvonverting system Date and Time to UTC using offset
         * @param date system Time
         * @returns UTC Date and Time
         */
        this.setUtcToSystemTimeZone = (date = this._date) => {
            let offset = date.getTimezoneOffset() * -1;
            this._date = new Date(date.getTime() + (offset * 60 * 1000));
            return this;
        };
        this._date = date;
    }
    get date() {
        return this._date;
    }
    set date(value) {
        this._date = value;
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
exports.default = Moment;
//# sourceMappingURL=index.js.map