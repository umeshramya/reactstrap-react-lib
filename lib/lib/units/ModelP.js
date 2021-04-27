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
class ModelP extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            modal: false,
            text: "",
            title: ""
        };
        /**This function toggels the the show hide of Modal */
        this.toggle = () => this.setState(Object.assign(Object.assign({}, this.state), { modal: !this.state.modal }));
        /**
         * This Shows the modal
         * @param curText Text to be displayed in body of Modal
         * @param curTitle Title of The modal
         */
        this.show = (curText = this.props.modelText, curTitle = this.props.modelTitle) => {
            this.setState(Object.assign(Object.assign({}, this.state), { modal: true, text: curText, title: curTitle }));
        };
        /**
         *
         * @returns Closes the modal
         */
        this.close = () => {
            this.setState(Object.assign(Object.assign({}, this.state), { modal: false }));
            return false;
        };
    }
    render() {
        return (react_1.default.createElement(reactstrap_1.Modal, { isOpen: this.state.modal },
            react_1.default.createElement(reactstrap_1.ModalHeader, { toggle: this.toggle }, this.state.title),
            react_1.default.createElement(reactstrap_1.ModalBody, null, this.state.text),
            react_1.default.createElement(reactstrap_1.ModalFooter, null,
                react_1.default.createElement(reactstrap_1.Button, { color: "primary", onClick: this.props.Ok }, "OK"),
                ' ',
                react_1.default.createElement(reactstrap_1.Button, { color: "secondary", onClick: this.toggle }, "Cancel"))));
    }
}
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