/**
 * This oclass deals with maniplitation of time and date
 */
export default class Moment{
    private _date: Date;


    public get date(): Date {
      return this._date;
    }
    public set date(value: Date) {
      this._date = value;
    }


    constructor(date:Date = new Date()){
        this._date = date;
    }
    /**
     * convert the utc date and time to local time using system timezone offset
     * @param date UTC dateand time
     * @returns date and time local timezone
     */
     setSystemTimeZoneToUTC= (date:Date = this._date):Moment=>{
        let offset = date.getTimezoneOffset();
   
        this._date = new Date(date.getTime() + (offset*60*1000)) ;
        return this
      }
      /**
       * This is for cvonverting system Date and Time to UTC using offset
       * @param date system Time
       * @returns UTC Date and Time
       */
      setUtcToSystemTimeZone = (date:Date = this._date):Moment=>{
        let offset = date.getTimezoneOffset()* -1;

        this._date = new Date(date.getTime() + (offset*60*1000));
        return this
      }
 
      /**
       * Converts the Date to date base storable format string 'YYYY-MM-DD hh:mm:ss[.fraction]'
       * @param _date date to converted default instance date
       * @returns string 'YYYY-MM-DD hh:mm:ss[.fraction]'
       */
      convertToDataBaseString(_date:Date = this._date):string{
     
        let ret=""
        let dateString= _date.toISOString()
        ret = dateString.substring(0, 10) +  " " + dateString.substring(11, dateString.length-1 )
        return ret.trim();
      }
    
}



