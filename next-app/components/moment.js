const {Moment} = require("reactstrap-react-lib")

let moment = new Moment()
console.log(moment.getSystemTimezoneDateTime().convertToDataBaseString())

