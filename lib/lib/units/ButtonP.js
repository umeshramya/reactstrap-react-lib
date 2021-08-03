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
class ButtonP extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            toggelSpin: false,
        };
        /**This toggles the spinner of the button */
        this.spin = () => this.setState(Object.assign(Object.assign({}, this.state), { toggelSpin: !this.state.toggelSpin }));
        /**This shows the spinner of the button */
        this.showSpin = () => this.setState(Object.assign(Object.assign({}, this.state), { toggelSpin: true }));
        /**This hides the spinner of the button */
        this.hideSpin = () => this.setState(Object.assign(Object.assign({}, this.state), { toggelSpin: false }));
    }
    render() {
        var _a, _b, _c;
        return (react_1.default.createElement(reactstrap_1.Button, { block: true, color: this.props.color, onClick: this.props.onClick, disabled: this.props.disabled, className: "g-recaptcha", "data-sitekey": (_a = this.props.recpthaSetting) === null || _a === void 0 ? void 0 : _a.siteKey, "data-callback": (_b = this.props.recpthaSetting) === null || _b === void 0 ? void 0 : _b.callBack, "data-action": (_c = this.props.recpthaSetting) === null || _c === void 0 ? void 0 : _c.action },
            `${this.props.text}  `,
            this.state.toggelSpin ? react_1.default.createElement(reactstrap_1.Spinner, null) : ""));
    }
}
exports.default = ButtonP;
//# sourceMappingURL=ButtonP.js.map