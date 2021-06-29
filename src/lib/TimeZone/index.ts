/**
 * This oclass deals with maniplitation of time and date
 */
export default class TimeZone {
  private _date: Date;


  /**
   * Returns dateTime in UTC time zone
   */
  public get date(): Date {
    return this._date;
  }

  /**
   * sets DateTime UTC time zone
   * @returns TimZone
   */
  public setDate(value: Date): TimeZone {
    this._date = value;
    return this
  }

  /**
   * This create Times zone with date and time set to UTC
   */
  constructor() {
    this._date = new Date();
  }




  /**
 * Converts the Date to date base storable format string 'YYYY-MM-DD hh:mm:ss[.fraction]'
 * @param _date date to converted default instance date
 * @returns string 'YYYY-MM-DD hh:mm:ss[.fraction]'
 */
  convertToDataBaseString(_date: Date = this._date): string {

    let ret = "";
    let dateString = _date.toISOString();
    ret = dateString.substring(0, 10) + " " + dateString.substring(11, dateString.length - 1);
    return ret.trim();
  }




  /**
   * 
   * This converts the class back to UTC time zone
   * @param date UTC dateand time
   * @returns date and time local timezone
   */
  setBackSystemToUTC = (date: Date = this._date): TimeZone => {
    let offset = date.getTimezoneOffset();

    this._date = new Date(date.getTime() + (offset * 60 * 1000));
    return this
  }





  /**
   * This sets the date given or class private _date to system Time zone
   * @param date date time default class priavte property _date
   * @returns UTC Date and Time
   */
  setUTCToSystemTimeZone = (date: Date = this._date): TimeZone => {
    let offset = date.getTimezoneOffset() * -1;

    this._date = new Date(date.getTime() + (offset * 60 * 1000));
    return this
  }



}



