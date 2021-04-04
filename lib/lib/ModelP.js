"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var ModelP = /** @class */ (function (_super) {
    __extends(ModelP, _super);
    function ModelP() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            modal: false,
            text: "",
            title: ""
        };
        /**This function toggels the the show hide of Modal */
        _this.toggle = function () { return _this.setState(__assign(__assign({}, _this.state), { modal: !_this.state.modal })); };
        /**
         * This Shows the modal
         * @param curText Text to be displayed in body of Modal
         * @param curTitle Title of The modal
         */
        _this.show = function (curText, curTitle) {
            if (curText === void 0) { curText = "Do you want Submit this data"; }
            if (curTitle === void 0) { curTitle = "Data Submission"; }
            _this.setState(__assign(__assign({}, _this.state), { modal: true, text: curText, title: curTitle }));
        };
        /**
         *
         * @returns Closes the modal
         */
        _this.close = function () {
            _this.setState(__assign(__assign({}, _this.state), { modal: false }));
            return false;
        };
        return _this;
    }
    ModelP.prototype.render = function () {
        return (react_1.default.createElement(reactstrap_1.Modal, { isOpen: this.state.modal },
            react_1.default.createElement(reactstrap_1.ModalHeader, { toggle: this.toggle }, this.state.title),
            react_1.default.createElement(reactstrap_1.ModalBody, null, this.state.text),
            react_1.default.createElement(reactstrap_1.ModalFooter, null,
                react_1.default.createElement(reactstrap_1.Button, { color: "primary", onClick: this.props.Ok }, "OK"),
                ' ',
                react_1.default.createElement(reactstrap_1.Button, { color: "secondary", onClick: this.toggle }, "Cancel"))));
    };
    return ModelP;
}(react_1.Component));
exports.default = ModelP;
// import React, { useState, useImperativeHandle } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// interface Props{
//     Ok:()=>void;
// }
// const ModalExample = React.forwardRef(({Ok}:Props, ref) => {
//   const [modal, setModal] = useState(false);
//   const [text, setText] = useState("")
//   const [title, setTitle] = useState("")
//   const toggle = () => setModal(!modal);
//   useImperativeHandle(ref, ()=>({
//     toggle : () => setModal(!modal),
//     show : (curText="Do you want Submit this data", curTitle="Data Submission")=>{
//       setModal(true)
//       setText(curText)
//       setTitle(curTitle)
//     },
//     close : ()=>{
//       setModal(false)
//       return false
//     }
//   }))
//   return (
//     <div>
//         <Modal isOpen={modal}>
//             <ModalHeader toggle={toggle}>{title}</ModalHeader>
//             <ModalBody>{text}</ModalBody>
//             <ModalFooter>
//             <Button color="primary" onClick={Ok}>OK</Button>{' '}
//             <Button color="secondary" onClick={toggle}>Cancel</Button>
//         </ModalFooter>
//         </Modal>
//     </div>
//   );
// })
// export default ModalExample;
//# sourceMappingURL=ModelP.js.map