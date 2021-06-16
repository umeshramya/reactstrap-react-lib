/**
 * This oclass deals with maniplitation of time and date
 */
export default class Moment extends Date{
    public _date:Date
    constructor(date:Date = new Date()){
        super(date);
        this._date = date;
    }
    /**
     * convert the utc date and time to local time using system timezone offset
     * @param date UTC dateand time
     * @returns date and time local timezone
     */
     getSystemTimezoneDateTime= (date:Date = this._date):Date=>{
        let offset = date.getTimezoneOffset() * -1;
        let ret:Date;
        ret = new Date(date.getTime() + (offset*60*1000));
        return ret;
      }
      /**
       * 
       * @param date 
       * @returns 
       */
      getUTCDateTime = (date:Date = this._date):Date=>{
        let offset = date.getTimezoneOffset();
        let ret:Date;
        ret = new Date(date.getTime() + (offset*60*1000));
        return ret;
      }
    
}



