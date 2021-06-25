const  {Moment} = require("reactstrap-react-lib")


const moment = new Moment();

let  curdate = moment.convertToDataBaseString();


console.log(curdate, "UTC"); // utc
console.log(moment.setUtcToSystemTimeZone().convertToDataBaseString(), "system time zone");
console.log(moment. setSystemTimeZoneToUTC().convertToDataBaseString(), "Back To UTC");
console.log(curdate.substring(0,10),  "Only date")
console.log(curdate.substring(11, 19), "only time")




