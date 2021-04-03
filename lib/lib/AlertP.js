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
var react_1 = __importStar(require("react"));
var reactstrap_1 = require("reactstrap");
var AlertP = react_1.default.forwardRef(function (props, ref) {
    var _a = react_1.useState("light"), color = _a[0], setcolor = _a[1];
    var _b = react_1.useState(""), text = _b[0], setText = _b[1];
    react_1.useImperativeHandle(ref, function () { return ({
        alertColor: function (color) {
            setcolor(color);
        },
        alertText: function (text) {
            setText(text);
        },
        alertLight: function (text) {
            if (text === void 0) { text = ""; }
            setText(text);
            setcolor("light");
        },
        alertSuccess: function (text) {
            setText(text);
            setcolor("success");
        },
        alertError: function (error) {
            setcolor("danger");
            if (typeof error.response !== "undefined") {
                setText(error.response.data);
            }
            else {
                setText(error);
            }
        }
    }); });
    return (react_1.default.createElement(reactstrap_1.Alert, { color: color, style: { margin: "10px" } }, text));
});
exports.default = AlertP;
//# sourceMappingURL=AlertP.js.map