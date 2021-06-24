/**
 * This oclass deals with maniplitation of time and date
 */
export default class Moment extends Date{
    private date: Date;

    public get _date(): Date {
      return this.date;
    }

    constructor(date:Date = new Date()){
        super(date);
        this.date = date;
    }
    /**
     * convert the utc date and time to local time using system timezone offset
     * @param date UTC dateand time
     * @returns date and time local timezone
     */
     _getSystemTimezoneDateTime= (date:Date = this.date):Date=>{
        let offset = date.getTimezoneOffset() * -1;
        let ret:Date;
        ret = new Date(date.getTime() + (offset*60*1000));
        return ret;
      }
      /**
       * This is for cvonverting system Date and Time to UTC using offset
       * @param date system Time
       * @returns UTC Date and Time
       */
      _getUTCDateTime = (date:Date = this.date):Date=>{
        let offset = date.getTimezoneOffset();
        let ret:Date;
        ret = new Date(date.getTime() + (offset*60*1000));
        return ret;
      }
 
      /**
       * Converts the Date to date base storable format string 'YYYY-MM-DD hh:mm:ss[.fraction]'
       * @param _date date to converted default instance date
       * @returns string 'YYYY-MM-DD hh:mm:ss[.fraction]'
       */
      _convertToDataBaseString(_date:Date = this.date):string{
     
        let ret=""
        let dateString= _date.toISOString()
        ret = dateString.substring(0, 10) +  " " + dateString.substring(12, dateString.length-1 )
        return ret.trim();
      }
    
}



