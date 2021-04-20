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
const link_1 = __importDefault(require("next/link"));
class Sidebar extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            panelTitle: "",
            section: null,
        };
    }
    dispalyEachLink(eachLink, index) {
        if (eachLink.panel !== undefined) {
            this.setState(Object.assign(Object.assign({}, this.state), { panelTitle: "" }));
        }
        else {
            return (react_1.default.createElement(link_1.default, { href: eachLink.link === undefined ? "" : eachLink.link },
                react_1.default.createElement(reactstrap_1.Col, { sm: 12, key: index, style: Styles.sidebarLi },
                    eachLink.icon,
                    eachLink.name)));
        }
    }
    render() {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(reactstrap_1.Row, null,
                react_1.default.createElement(reactstrap_1.Col, { sm: 12, lg: 3, style: Styles.sidebar },
                    react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("h4", null, this.props.orgName),
                        react_1.default.createElement("h5", null, this.props.userName),
                        react_1.default.createElement(reactstrap_1.Row, null, this.props.siderBarLinks !== undefined ?
                            this.props.siderBarLinks.map((eachLink, index) => {
                                return (this.dispalyEachLink(eachLink, index));
                            }) : ""))),
                react_1.default.createElement(reactstrap_1.Col, { sm: 12, lg: 9 },
                    react_1.default.createElement(reactstrap_1.Row, null,
                        react_1.default.createElement(reactstrap_1.Col, { sm: 12, style: Styles.menubar })),
                    react_1.default.createElement(reactstrap_1.Row, null,
                        react_1.default.createElement(reactstrap_1.Col, { sm: 12 },
                            this.props.section === null ? "" :
                                react_1.default.createElement(SectionPanel_1.default, { panelTitle: this.state.panelTitle, section: this.state.section }),
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
    },
    sidebarUl: {
        /* padding-top: 50px; */
        paddingLeft: "0px",
        width: "100%"
    },
    sidebarLi: {
        listStyle: "none",
        height: "40px",
        width: "100%",
        paddingLeft: "10px",
        paddingTop: "10px",
        "&:hover": {
            backgroundColor: "#1a83ff",
            cursor: "pointer",
        }
    },
    sidebarLink: {
        width: "100%",
    },
    // .logout{
    //     text-align: center;
    // }
    // .logout:hover {
    //     cursor: pointer;
    // }
};
//# sourceMappingURL=Sidebar.js.map