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
class AlertP extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            text: "",
            color: "",
        };
        /**
         * This set boostrap color to  Alert
         * @param color Bootstrap color as string
         */
        this.alertColor = (color) => {
            this.setState(Object.assign(Object.assign({}, this.state), { color: color }));
        };
        /**
         * This sets the text to Alert
         * @param text text dispaly in Alert
         */
        this.alertText = (text) => {
            this.setState(Object.assign(Object.assign({}, this.state), { text: text }));
        };
        /**
         *  Along with setting text it converts the color of Alert to boostrap light
         * @param text text dispaly in Alert
         */
        this.alertLight = (text = "") => {
            this.setState({
                text: text,
                color: "light",
            });
        };
        /**
         * Along with setting text it converts the color of Alert to boostrap success
         * @param text text dispaly in Alert
         */
        this.alertSuccess = (text) => {
            this.setState({
                text: text,
                color: "success",
            });
        };
        /**
         * This sets the color of Alert to boostrap danger
         * extracts the text from error.response.data if error is not a string
         * @param error display error dange rw ith message as string
         */
        this.alertError = (error) => {
            this.setState({
                text: error,
                color: "danger",
            });
        };
    }
    render() {
        return (react_1.default.createElement(reactstrap_1.Alert, { color: this.state.color, style: { margin: "10px" } }, this.state.text));
    }
}
exports.default = AlertP;
//# sourceMappingURL=AlertP.js.map