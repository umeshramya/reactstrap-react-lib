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
function TableCompenent({ columns, data }) {
    const [stData, setstData] = react_1.useState([]);
    react_1.useEffect(() => {
        setstData(data);
        return () => { };
    }, [data]);
    const TD = (row, col) => {
        let ret;
        let value = row[col.accessor];
        if (col.Cell) {
            ret = col.Cell({ value });
        }
        else {
            ret = value;
        }
        return ret;
    };
    const filterHandle = (e) => {
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(reactstrap_1.Table, { hover: true, responsive: true, bordered: true },
            react_1.default.createElement("thead", null,
                react_1.default.createElement("tr", null, columns.map((col, index) => {
                    return (react_1.default.createElement("th", { key: index },
                        react_1.default.createElement(reactstrap_1.Row, null,
                            react_1.default.createElement(reactstrap_1.Col, null,
                                react_1.default.createElement("strong", null, col.Header))),
                        col.filter ?
                            react_1.default.createElement(reactstrap_1.Row, null,
                                react_1.default.createElement(reactstrap_1.Col, null,
                                    react_1.default.createElement(reactstrap_1.Input, { type: "text", onChange: (e) => filterHandle(e) }))) : ""));
                }))),
            react_1.default.createElement("tbody", null, stData.map((row, index) => {
                return (react_1.default.createElement("tr", { key: index }, columns.map((col, rindex) => {
                    return (react_1.default.createElement("td", { key: rindex }, TD(row, col)));
                })));
            })))));
}
exports.default = TableCompenent;
//# sourceMappingURL=Table.js.map