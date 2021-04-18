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
const reactstrap_1 = require("reactstrap");
const IoIcons = __importStar(require("react-icons/io"));
const link_1 = __importDefault(require("next/link"));
/**
 * @panelTitle  This is panel title prop
 * @Section  This props is array of section elements each  section eleemnts is array of name and link property. name is name to dispolyed over the link
 *
 */
class SectionPanel extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            isOpen: true,
        };
        this.panelToggel = () => this.setState(Object.assign(Object.assign({}, this.state), { isOpen: !this.state.isOpen }));
        this.panelClose = () => this.setState(Object.assign(Object.assign({}, this.state), { isOpen: false }));
        this.panelOpen = () => this.setState(Object.assign(Object.assign({}, this.state), { isOpen: true }));
    }
    render() {
        return (react_1.default.createElement(reactstrap_1.Row, null,
            react_1.default.createElement(reactstrap_1.Col, { sm: 12 },
                react_1.default.createElement(reactstrap_1.Collapse, { isOpen: this.state.isOpen },
                    react_1.default.createElement(reactstrap_1.Jumbotron, null,
                        react_1.default.createElement(IoIcons.IoMdClose, { size: 50, onClick: this.panelClose, style: { cursor: "pointer" } }),
                        react_1.default.createElement("h4", null,
                            " ",
                            `${this.props.panelTitle} Panal`),
                        react_1.default.createElement(reactstrap_1.Row, null, this.props.section.map((eachSection, i) => {
                            return (react_1.default.createElement(reactstrap_1.Col, { sm: 12, md: 6, lg: 3, key: i },
                                react_1.default.createElement("h5", null, eachSection.title),
                                eachSection.sectionElements.map((eachSectionElment, j) => {
                                    return (react_1.default.createElement(reactstrap_1.Row, { key: j },
                                        react_1.default.createElement(reactstrap_1.Col, { sm: 12 },
                                            react_1.default.createElement(link_1.default, { href: eachSectionElment.link }, eachSectionElment.name))));
                                })));
                        })))))));
    }
}
exports.default = SectionPanel;
//# sourceMappingURL=SectionPanel.js.map