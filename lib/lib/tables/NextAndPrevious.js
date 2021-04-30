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
exports.NextAndPrevious = void 0;
const react_1 = __importStar(require("react"));
const gr_1 = require("react-icons/gr");
const reactstrap_1 = require("reactstrap");
function NextAndPrevious({}) {
    const [pageNo, setpageNo] = react_1.useState(1);
    const pageNoHandle = (e) => {
    };
    const next = (e) => {
    };
    const previous = (e) => {
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(reactstrap_1.Row, null,
            react_1.default.createElement(reactstrap_1.Col, { style: { display: "flex", justifyContent: "end" } },
                react_1.default.createElement(gr_1.GrChapterPrevious, { size: "35px", onClick: (e) => previous(e), style: { cursor: "pointer" } })),
            react_1.default.createElement(reactstrap_1.Col, { style: { display: "flex", justifyContent: "end" } },
                react_1.default.createElement(gr_1.GrCaretPrevious, { size: "35px", onClick: (e) => previous(e), style: { cursor: "pointer" } })),
            react_1.default.createElement(reactstrap_1.Col, { style: { display: "flex", justifyContent: "center" } },
                react_1.default.createElement(reactstrap_1.Input, { type: "number", value: pageNo, onChange: (e) => pageNoHandle(e), width: "23px" })),
            react_1.default.createElement(reactstrap_1.Col, { style: { display: "flex", justifyContent: "start" } },
                react_1.default.createElement(gr_1.GrCaretNext, { size: "35px", onClick: (e) => next(e), style: { cursor: "pointer" } })),
            react_1.default.createElement(reactstrap_1.Col, { style: { display: "flex", justifyContent: "start" } },
                react_1.default.createElement(gr_1.GrChapterNext, { size: "35px", onClick: (e) => next(e), style: { cursor: "pointer" } })))));
}
exports.NextAndPrevious = NextAndPrevious;
//# sourceMappingURL=NextAndPrevious.js.map