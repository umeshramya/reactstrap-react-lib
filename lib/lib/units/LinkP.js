"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const link_1 = __importDefault(require("next/link"));
const fa_1 = require("react-icons/fa");
function LinkP({ value, link }) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("style", null, `
            .table-link{  
              color : blue
            }
            .table-link:hover{
              cursor: pointer;
            }
        `),
        react_1.default.createElement(link_1.default, { href: link },
            react_1.default.createElement("span", { className: "table-link" },
                react_1.default.createElement(fa_1.FaHandPointRight, null),
                ` ${value}`))));
}
exports.default = LinkP;
//# sourceMappingURL=LinkP.js.map