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
const router_1 = require("next/router");
class Sidebar extends react_1.Component {
    constructor(props) {
        super(props);
        this.router = router_1.useRouter();
        this.state = {
            panelTitle: "",
            section: null,
        };
        this.curSectionPanel = react_1.default.createRef();
    }
    dispalyEachLink(eachLink, index) {
        return (react_1.default.createElement(reactstrap_1.Col, { onClick: () => {
                var _a;
                if (eachLink.panel) {
                    // change the states of panel
                    this.setState(Object.assign(Object.assign({}, this.state), { panelTitle: eachLink.panel.panelTitle, section: eachLink.panel.section }));
                    (_a = this.curSectionPanel.current) === null || _a === void 0 ? void 0 : _a.panelOpen();
                }
                else if (eachLink.link !== undefined) {
                    // use router to push to new link
                    this.router.push(eachLink.link);
                }
            }, sm: 12, className: `sidebarLi`, key: index }, eachLink.name));
    }
    render() {
        return (react_1.default.createElement(reactstrap_1.Row, null,
            react_1.default.createElement("style", null, `.menubar{
            background-color: #060b26;
            color: #f5f5f5;
            height: 60px;
            margin-bottom: 10px;
            padding:8px;
        }
        
        
        .sidebar{
            background-color: #060b26;
            color: #f5f5f5;
            height: 100vh;
            display: flex;
            justify-content:flex-start;
            align-items: flex-start;
            flex-direction: column;
        }
        
        .sidebarUl{
            /* padding-top: 50px; */
            padding-left: 0px;
            width: 100%;
        
        }
        
        .sidebarLi {
            height:  40px;
            width: 100%;
            padding-left: 10px;
            padding-top: 10px;
        }
        
        .sidebarLink{
            width: 100%;
        }
        
        .sidebarLi:hover {
            background-color: #1a83ff;
            cursor: pointer;
        }
        
        .logout{
            text-align: center;
        }
        .logout:hover {
            cursor: pointer;
        }
        
        .PanalClose:hover{
            cursor: pointer;
        }
        `),
            react_1.default.createElement(reactstrap_1.Col, { sm: 12, lg: 3, className: `sidebar` },
                react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("h4", null, this.props.orgName),
                    react_1.default.createElement("h5", null, this.props.userName),
                    react_1.default.createElement(reactstrap_1.Row, { className: `sidebarUl` }, this.props.siderBarLinks !== undefined ?
                        this.props.siderBarLinks.map((eachLink, index) => {
                            return (this.dispalyEachLink(eachLink, index));
                        }) : ""))),
            react_1.default.createElement(reactstrap_1.Col, { sm: 12, lg: 9 },
                react_1.default.createElement(reactstrap_1.Row, null,
                    react_1.default.createElement(reactstrap_1.Col, { sm: 12, className: `menubar` })),
                react_1.default.createElement(reactstrap_1.Row, null,
                    react_1.default.createElement(reactstrap_1.Col, { sm: 12 },
                        this.props.section === null ? "" :
                            react_1.default.createElement(SectionPanel_1.default, { panelTitle: this.state.panelTitle, section: this.state.section, ref: this.curSectionPanel }),
                        this.props.Main)))));
    }
}
exports.default = Sidebar;
//# sourceMappingURL=SidebarClass.js.map