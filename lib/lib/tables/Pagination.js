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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
const react_1 = __importStar(require("react"));
const gr_1 = require("react-icons/gr");
const reactstrap_1 = require("reactstrap");
function Pagination({ pageFrom = "Server", firstPage = () => __awaiter(this, void 0, void 0, function* () { return 1; }), lastPage = () => __awaiter(this, void 0, void 0, function* () { return 1; }), nextPage = () => __awaiter(this, void 0, void 0, function* () { return false; }), previousPage = () => __awaiter(this, void 0, void 0, function* () { return false; }), }) {
    const [stPageNo, setStPageNo] = react_1.useState(0);
    const firstPageHandle = (firstPage) => __awaiter(this, void 0, void 0, function* () {
        if (firstPage !== undefined) {
            let pageNumber = yield firstPage(0);
            pageNumber === 0 ? setStPageNo(0) : 0;
        }
    });
    const lastPageHandle = (lastPage) => __awaiter(this, void 0, void 0, function* () {
        if (lastPage !== undefined) {
            let pageNumber = yield lastPage(stPageNo);
            pageNumber >= 0 ? setStPageNo(stPageNo) : 0;
        }
    });
    const pageNoHandle = (e) => {
        let value = parseInt(e.target.value);
        if (value < 1) {
            value = 0;
        }
        setStPageNo(value);
    };
    const nextPageHandle = (nextPage) => __awaiter(this, void 0, void 0, function* () {
        let newPageNo = stPageNo + 1;
        if (nextPage !== undefined) {
            let pageSet = yield nextPage(newPageNo);
            pageSet ? setStPageNo(newPageNo) : 0;
        }
    });
    const previousPageHandle = (previousPage) => __awaiter(this, void 0, void 0, function* () {
        let newPageNo = 0;
        if (stPageNo > 0) {
            newPageNo = stPageNo - 1;
        }
        if (previousPage !== undefined) {
            let pageSet = yield previousPage(newPageNo);
            pageSet ? setStPageNo(newPageNo) : 0;
        }
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(reactstrap_1.Row, null,
            react_1.default.createElement(reactstrap_1.Col, { style: { display: "flex", justifyContent: "end" } }, pageFrom !== "Server" ?
                react_1.default.createElement(gr_1.GrChapterPrevious, { size: "35px", onClick: (e) => firstPageHandle(firstPage), style: { cursor: "pointer" } })
                : ""),
            react_1.default.createElement(reactstrap_1.Col, { style: { display: "flex", justifyContent: "end" } },
                react_1.default.createElement(gr_1.GrCaretPrevious, { size: "35px", onClick: (e) => previousPageHandle(previousPage), style: { cursor: "pointer" } })),
            react_1.default.createElement(reactstrap_1.Col, null,
                react_1.default.createElement(reactstrap_1.Input, { type: "number", value: stPageNo, onChange: (e) => pageNoHandle(e), width: "23px" })),
            react_1.default.createElement(reactstrap_1.Col, { style: { display: "flex", justifyContent: "start" } },
                react_1.default.createElement(gr_1.GrCaretNext, { size: "35px", onClick: (e) => nextPageHandle(nextPage), style: { cursor: "pointer" } })),
            react_1.default.createElement(reactstrap_1.Col, { style: { display: "flex", justifyContent: "start" } }, pageFrom !== "Server" ?
                react_1.default.createElement(gr_1.GrChapterNext, { size: "35px", onClick: (e) => lastPageHandle(lastPage), style: { cursor: "pointer" } }) :
                ""))));
}
exports.Pagination = Pagination;
//# sourceMappingURL=Pagination.js.map