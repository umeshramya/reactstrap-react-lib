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
const Table_1 = __importDefault(require("./Table"));
const Pagination_1 = require("./Pagination");
function index({ columns, data, filter = "Both", sort = true, pagination }) {
    const [search, setSearch] = react_1.useState("");
    const [stData, setstData] = react_1.useState([]);
    react_1.useEffect(() => {
        setstData(data);
        return () => { };
    }, [data]);
    const SerachHandle = (e) => {
        let value = e.target.value;
        setSearch(value);
        //code here for filter
        let keys = columns.map(col => col.accessor);
        let tempData = data.filter(o => {
            let oString = "";
            for (const key of keys) {
                oString = `${oString},${o[key]}`;
            }
            if (oString.toLowerCase().search(value.trim().toString().toLowerCase()) >= 0) {
                return o;
            }
        });
        setstData(tempData);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(reactstrap_1.Row, null,
            react_1.default.createElement(reactstrap_1.Col, { sm: 12, md: 6 }, filter == "Global" || filter == "Both" ?
                react_1.default.createElement(reactstrap_1.FormGroup, null,
                    react_1.default.createElement(reactstrap_1.Input, { type: "text", value: search, onChange: (e) => SerachHandle(e), placeholder: "Search" })) : ""),
            react_1.default.createElement(reactstrap_1.Col, { sm: 12, md: 6 },
                react_1.default.createElement(Pagination_1.Pagination, { pageFrom: pagination === null || pagination === void 0 ? void 0 : pagination.pageFrom, pageNo: pagination === null || pagination === void 0 ? void 0 : pagination.pageNo, firstPage: pagination === null || pagination === void 0 ? void 0 : pagination.firstPage, lastPage: pagination === null || pagination === void 0 ? void 0 : pagination.lastPage, nextPage: pagination === null || pagination === void 0 ? void 0 : pagination.nextPage, previousPage: pagination === null || pagination === void 0 ? void 0 : pagination.previousPage }))),
        react_1.default.createElement(Table_1.default, { data: stData, columns: columns, filter: filter, sort: sort, pagination: pagination })));
}
exports.default = index;
//# sourceMappingURL=index.js.map