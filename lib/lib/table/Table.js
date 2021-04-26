"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const reactstrap_1 = require("reactstrap");
function TableCompenent({ columns, data }) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(reactstrap_1.Table, null,
            react_1.default.createElement("thead", null,
                react_1.default.createElement("tr", null, columns.map((col, index) => {
                    return (react_1.default.createElement("th", { key: index },
                        react_1.default.createElement("strong", null, col.Header)));
                }))),
            react_1.default.createElement("tbody", null, data.map((row, index) => {
                return (react_1.default.createElement("tr", { key: index }, columns.map((col, rindex) => {
                    return (react_1.default.createElement("td", { key: rindex }, row[col.accessor]));
                })));
            })))));
}
exports.default = TableCompenent;
//# sourceMappingURL=Table.js.map