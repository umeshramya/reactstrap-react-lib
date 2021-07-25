"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const reactstrap_1 = require("reactstrap");
const index_1 = require("../../index");
function FormUpload(props) {
    const submitHandler = (e) => {
        e.preventDefault();
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(reactstrap_1.Form, { onSubmit: (e) => submitHandler(e) },
            react_1.default.createElement(reactstrap_1.FormGroup, null,
                react_1.default.createElement(reactstrap_1.Label, null, "Upload"),
                react_1.default.createElement(reactstrap_1.Input, { type: "file", accept: props.accept, multiple: props.multiple })),
            react_1.default.createElement(reactstrap_1.FormGroup, null,
                react_1.default.createElement(index_1.ButtonP, { disabled: false, text: "Upload" })))));
}
exports.default = FormUpload;
//# sourceMappingURL=FormUpload.js.map