const {Moment} = require("reactstrap-react-lib")

let moment = new Moment()
console.log(moment._getSystemTimezoneDateTime())
console.log(moment.getUTCDateTime().toString())
