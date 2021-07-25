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
const Sidebar = (props) => {
    const router = router_1.useRouter();
    const curSectionPanel = react_1.useRef();
    let initPanelTitle = "";
    let initSection = [];
    const [panelTitle, setpanelTitle] = react_1.useState(initPanelTitle);
    const [section, setSection] = react_1.useState(initSection);
    const dispalyEachLink = (eachLink, index) => {
        return (react_1.default.createElement(reactstrap_1.Col, { onClick: () => {
                var _a;
                if (eachLink.panel) {
                    // change the states of panel
                    setpanelTitle(eachLink.panel.panelTitle);
                    setSection(eachLink.panel.section);
                    (_a = curSectionPanel.current) === null || _a === void 0 ? void 0 : _a.panelOpen();
                }
                else if (eachLink.link !== undefined) {
                    // use router to push to new link
                    router.push(eachLink.link);
                }
            }, sm: 12, className: `sidebarLi`, key: index }, eachLink.name));
    };
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
            padding-left: 30px;
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
        react_1.default.createElement(reactstrap_1.Col, { expand: "lg", className: `sidebar sticky-top` },
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("h4", null, props.orgName),
                react_1.default.createElement("h5", null, props.userName),
                react_1.default.createElement(reactstrap_1.Row, { className: `sidebarUl` }, props.siderBarLinks !== undefined
                    ? props.siderBarLinks.map((eachLink, index) => {
                        return dispalyEachLink(eachLink, index);
                    })
                    : ""))),
        react_1.default.createElement(reactstrap_1.Col, { sm: 12, lg: 10 },
            react_1.default.createElement(reactstrap_1.Row, null,
                react_1.default.createElement(reactstrap_1.Col, { sm: 12, className: `menubar` },
                    react_1.default.createElement(reactstrap_1.Row, null,
                        react_1.default.createElement(reactstrap_1.Col, null,
                            react_1.default.createElement("h5", null, props.pageName)),
                        react_1.default.createElement(reactstrap_1.Col, null, props.barComponent)))),
            react_1.default.createElement(reactstrap_1.Row, null,
                react_1.default.createElement(reactstrap_1.Col, { sm: 12 },
                    react_1.default.createElement(SectionPanel_1.default, { panelTitle: panelTitle, section: section, ref: curSectionPanel }),
                    props.Main)))));
};
exports.default = Sidebar;
//# sourceMappingURL=Sidebar.js.map