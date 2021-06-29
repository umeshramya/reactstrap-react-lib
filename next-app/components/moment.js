const { TimeZone } = require("reactstrap-react-lib")

let timeZone = new TimeZone()// sets current time stamp to UTC time zone
timeZone.setDate(new Date())// sets passed date time to UTC time zone
console.log(timeZone.setDate(new Date()).convertToDataBaseString())// return string date
console.log(timeZone.setUTCToSystemTimeZone().convertToDataBaseString())// retunr string date in system time zone

