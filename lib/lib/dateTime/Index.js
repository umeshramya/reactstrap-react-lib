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
    const [dateTimeState, setDateTimeState] = react_1.useState(props.setDateTime);
    const setDate = (e) => {
        let date = e.target.value;
        let preDate = dateTimeState.substring(0, 10);
        let newDate = dateTimeState.replace(preDate, date);
        props.getDateTime(newDate);
        setDateTimeState(newDate);
    };
    const setTime = (e) => {
        let time = e.target.value;
        let preTime = dateTimeState.substring(11, 19);
        let newTime = dateTimeState.replace(preTime, `${time}`);
        props.getDateTime(newTime);
        setDateTimeState(newTime);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(reactstrap_1.Row, { noGutters: true },
            react_1.default.createElement(reactstrap_1.Col, { sm: 6 },
                react_1.default.createElement(reactstrap_1.Input, { type: "date", value: dateTimeState.substring(0, 10), onChange: (e) => setDate(e) })),
            react_1.default.createElement(reactstrap_1.Col, { sm: 6 },
                react_1.default.createElement(reactstrap_1.Input, { type: "time", value: dateTimeState.substring(11, 19), onChange: (e) => setTime(e) })))));
}
exports.default = Index;
//# sourceMappingURL=Index.js.map