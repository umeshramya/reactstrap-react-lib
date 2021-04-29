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
const fa_1 = require("react-icons/fa");
function TableCompenent({ columns, data, filter, sort }) {
    /**
     * This is state forn data prop
     */
    const [stData, setstData] = react_1.useState([]);
    const [stSort, setStSort] = react_1.useState(true);
    const sortHandle = (accessor) => {
        const sort = (argData) => {
            argData.sort((a, b) => {
                let aValue;
                let bValue;
                if (typeof a === "number") {
                    aValue = a;
                    bValue = b;
                }
                else {
                    aValue = `${a[accessor]}`.toLocaleLowerCase();
                    bValue = `${b[accessor]}`.toLocaleLowerCase();
                }
                if (stSort) {
                    return (aValue < bValue) ? -1 : (aValue > bValue) ? 1 : 0;
                }
                else {
                    return (aValue > bValue) ? -1 : (aValue < bValue) ? 1 : 0;
                }
            });
        };
        let tempStDate = [];
        Object.assign(tempStDate, stData);
        sort(tempStDate);
        setstData(tempStDate);
        setStSort(!stSort);
    };
    /**
     * This is state for all column filterobject to manege input value and onChange event
     */
    const [fillterObj, setfillterObj] = react_1.useState({});
    /**
     * creats the filterObject state
     * dervide from accessor
     * This called by useEffect
     */
    const filterObjHandleInit = () => {
        let keys = columns.map(col => col.accessor);
        let obj = {};
        keys.forEach(key => {
            obj[key] = "";
        });
        setfillterObj(obj);
    };
    /**
     * this set the two states one is stDate other is filetrObject
     */
    react_1.useEffect(() => {
        setstData(data);
        filterObjHandleInit();
        return () => { };
    }, [data]);
    /**
     * This function filters the stData state . also reset the filterObject intial state and assign the consernbed accessor to e.tartget value
     * @param e e is is event from input elemnt for cvolumn filter
     * @param accessor this is accessor from column prop
     */
    const filterOnChangeHandle = (e, accessor) => {
        let tempFilterObject = {}; // creeat tempFlterObject
        Object.assign(tempFilterObject, fillterObj); //assign tempFilterObject to filterObject Sate
        // set all keys to "" thus clearing all inputs
        for (const key in tempFilterObject) {
            tempFilterObject[key] = "";
        }
        tempFilterObject[accessor] = e.target.value; //for conserned accssor or input aset the value
        setfillterObj(tempFilterObject); // change the state of FilterObject
        //filter the data 
        let tempData = data.filter(o => {
            let searchString = `${o[accessor]}`;
            if (searchString.toLocaleLowerCase().search(e.target.value.toString().trim().toLocaleLowerCase()) >= 0) {
                return o;
            }
        });
        setstData(tempData);
    };
    /**
     *
     * @param row row in table
     * @param col col in table
     * @returns returns the  / value of table
     */
    const tdHandle = (row, col) => {
        let ret;
        let value = row[col.accessor];
        if (col.Cell) {
            ret = col.Cell({ value });
        }
        else {
            ret = value;
        }
        return ret;
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(reactstrap_1.Table, { hover: true, responsive: true, bordered: true },
            react_1.default.createElement("thead", null,
                react_1.default.createElement("tr", null, columns.map((col, index) => {
                    return (react_1.default.createElement("th", { key: index },
                        react_1.default.createElement("strong", null, col.Header),
                        sort == true ? react_1.default.createElement(fa_1.FaSort, { onClick: () => sortHandle(col.accessor) }) : "",
                        filter == "Column" || filter == "Both" ?
                            react_1.default.createElement(reactstrap_1.Input, { type: "text", value: fillterObj[col.accessor], onChange: (e) => filterOnChangeHandle(e, col.accessor), placeholder: `Search by ${col.accessor}` }) : ""));
                }))),
            react_1.default.createElement("tbody", null, stData.map((row, index) => {
                return (react_1.default.createElement("tr", { key: index }, columns.map((col, rindex) => {
                    return (react_1.default.createElement("td", { key: rindex }, tdHandle(row, col)));
                })));
            })))));
}
exports.default = TableCompenent;
//# sourceMappingURL=Table.js.map