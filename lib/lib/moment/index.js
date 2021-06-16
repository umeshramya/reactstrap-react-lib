"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This oclass deals with maniplitation of time and date
 */
class Moment extends Date {
    constructor(date = new Date()) {
        super(date);
        /**
         * convert the utc date and time to local time using system timezone offset
         * @param date UTC dateand time
         * @returns date and time local timezone
         */
        this.getSystemTimezoneDateTime = (date = this._date) => {
            let offset = date.getTimezoneOffset() * -1;
            let ret;
            ret = new Date(date.getTime() + (offset * 60 * 1000));
            return ret;
        };
        /**
         *
         * @param date
         * @returns
         */
        this.getUTCDateTime = (date = this._date) => {
            let offset = date.getTimezoneOffset();
            let ret;
            ret = new Date(date.getTime() + (offset * 60 * 1000));
            return ret;
        };
        this._date = date;
    }
}
exports.default = Moment;
//# sourceMappingURL=index.js.map