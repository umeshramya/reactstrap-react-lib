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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const SectionPanel_1 = __importDefault(require("./SectionPanel"));
const reactstrap_1 = require("reactstrap");
class Sidebar extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {};
    }
    render() {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(reactstrap_1.Row, null,
                react_1.default.createElement(reactstrap_1.Col, { sm: 12, lg: 3, style: Styles.sidebar }),
                react_1.default.createElement(reactstrap_1.Col, { sm: 12, lg: 9 },
                    react_1.default.createElement(reactstrap_1.Row, null,
                        react_1.default.createElement(reactstrap_1.Col, { sm: 12, style: Styles.menubar })),
                    react_1.default.createElement(reactstrap_1.Row, null,
                        react_1.default.createElement(reactstrap_1.Col, { sm: 12 },
                            react_1.default.createElement(SectionPanel_1.default, Object.assign({}, this.props)),
                            this.props.Main))))));
    }
}
exports.default = Sidebar;
let Styles = {
    menubar: {
        backgroundColor: "#060b26",
        color: "#f5f5f5",
        height: "60px",
        marginBottom: "10px",
        padding: "8px",
    },
    sidebar: {
        backgroundColor: "#060b26",
        color: "#f5f5f5",
        height: "100vh",
    }
    // .sidebarUl{
    //     /* padding-top: 50px; */
    //     padding-left: 0px;
    //     width: 100%;
    // }
    // .sidebarLi {
    //     list-style :none;
    //     height:  40px;
    //     width: 100%;
    //     padding-left: 10px;
    //     padding-top: 10px;
    // }
    // .sidebarLink{
    //     width: 100%;
    // }
    // .sidebarLi:hover {
    //     background-color: #1a83ff;
    //     cursor: pointer;
    // }
    // .logout{
    //     text-align: center;
    // }
    // .logout:hover {
    //     cursor: pointer;
    // }
    // .PanalClose:hover{
    //     cursor: pointer;
    // }
};
//# sourceMappingURL=Sidebar.js.map