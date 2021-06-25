const  {Moment} = require("reactstrap-react-lib")


const moment = new Moment();

let  curdate = moment.convertToDataBaseString();


console.log(curdate);
console.log(moment.setSystemTimeZoneToUTC().convertToDataBaseString(), "System time zone");
console.log(moment.setUtcToSystemTimeZone().convertToDataBaseString(), "Back to utc");



