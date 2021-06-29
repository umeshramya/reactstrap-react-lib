const { TimeZone } = require("reactstrap-react-lib")

let moment = new TimeZone()
console.log(moment.setSystemTimeZoneToUTC().convertToDataBaseString())

