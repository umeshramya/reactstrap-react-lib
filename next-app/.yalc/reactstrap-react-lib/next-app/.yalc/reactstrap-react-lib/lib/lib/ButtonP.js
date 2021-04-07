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
            toggelSpin: false
        };
        /**This toggles the spinner of the button */
        this.spin = () => this.setState(Object.assign(Object.assign({}, this.state), { toggelSpin: !this.state.toggelSpin }));
        /**This shows the spinner of the button */
        this.showSpin = () => this.setState(Object.assign(Object.assign({}, this.state), { toggelSpin: true }));
        /**This hides the spinner of the button */
        this.hideSpin = () => this.setState(Object.assign(Object.assign({}, this.state), { toggelSpin: false }));
    }
    render() {
        return (react_1.default.createElement(reactstrap_1.Button, { block: true, color: this.props.color, onClick: this.props.onClick },
            `${this.props.text}  `,
            this.state.toggelSpin ? react_1.default.createElement(reactstrap_1.Spinner, null) : ""));
    }
}
exports.default = ButtonP;
// import React, {useState, useImperativeHandle} from 'react'
// import {Button, Spinner} from "reactstrap"
// interface Props{
//     text:string;
//     onClick?: ()=>void
// }
//  const ButtonP =  React.forwardRef(({text, onClick}:Props, ref) => {
//     const [toggelSpin, setsToggelSpin] = useState(false)
//     useImperativeHandle(ref, ()=>({
//         spin : ()=> setsToggelSpin(!toggelSpin),
//         showSpin : ()=> setsToggelSpin(true),
//         hideSpin : ()=> setsToggelSpin(false),
//       }))
//     return (
//         <Button block onClick = {onClick} >{`${text}  `}
//             {toggelSpin ? <Spinner/> : ""}
//         </Button>
//     )
// })
// export default ButtonP
// ButtonP.defaultProps={
//     text : "Click",
// }
//# sourceMappingURL=ButtonP.js.map