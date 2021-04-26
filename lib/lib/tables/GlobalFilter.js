"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalFilter = void 0;
const react_1 = __importDefault(require("react"));
const reactstrap_1 = require("reactstrap");
const GlobalFilter = ({ filter, setFilter }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(reactstrap_1.Row, null,
            react_1.default.createElement(reactstrap_1.Col, null,
                react_1.default.createElement(reactstrap_1.FormGroup, null,
                    react_1.default.createElement(reactstrap_1.Label, null, "Search"),
                    react_1.default.createElement(reactstrap_1.Input, { type: "search", value: filter || "", onChange: (e) => setFilter(e.target.value) }))))));
};
exports.GlobalFilter = GlobalFilter;
//# sourceMappingURL=GlobalFilter.js.map