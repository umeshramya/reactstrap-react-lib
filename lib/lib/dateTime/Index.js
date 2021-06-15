"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const reactstrap_1 = require("reactstrap");
function Index(props) {
    const [dateTime, setDateTime] = react_1.useState(props.value);
    const setDate = (e) => {
        let date = e.target.value;
        let preDate = dateTime.substring(0, 10);
        let newDate = dateTime.replace(preDate, date);
        setDateTime(newDate);
        console.log(newDate);
    };
    const setTime = (e) => {
        let time = e.target.value;
        let preTime = dateTime.substring(12, 16);
        let newTime = dateTime.replace(preTime, time);
        setDateTime(newTime);
        console.log(newTime);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(reactstrap_1.Input, { type: "date", value: dateTime.substring(0, 10), onChange: (e) => setDate(e) }),
        react_1.default.createElement(reactstrap_1.Input, { type: 'time', value: dateTime.substring(12, 16), onChange: (e) => setTime(e) })));
}
exports.default = Index;
//# sourceMappingURL=Index.js.map