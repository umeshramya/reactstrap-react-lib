"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_table_1 = require("react-table");
const reactstrap_1 = require("reactstrap");
function TableCompenent({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, } = react_table_1.useTable({
        columns,
        data,
    });
    // Render the UI for your table
    return (react_1.default.createElement(reactstrap_1.Table, Object.assign({}, getTableProps(), { responsive: true, striped: true, hover: true }),
        react_1.default.createElement("thead", null, headerGroups.map(headerGroup => (react_1.default.createElement("tr", Object.assign({}, headerGroup.getHeaderGroupProps()), headerGroup.headers.map(column => (react_1.default.createElement("th", Object.assign({ scope: "row" }, column.getHeaderProps()), column.render('Header')))))))),
        react_1.default.createElement("tbody", Object.assign({}, getTableBodyProps()), rows.map((row, i) => {
            prepareRow(row);
            return (react_1.default.createElement("tr", Object.assign({}, row.getRowProps()), row.cells.map(cell => {
                return react_1.default.createElement("td", Object.assign({}, cell.getCellProps()), cell.render('Cell'));
            })));
        }))));
}
// function App({column, data}) {
//   const columns = React.useMemo(
//     () => [
//          {
//             Header: 'Email',
//             accessor: 'email',
//           },
//           {
//             Header: 'Role',
//             accessor: 'role',
//           },
//     ],
//     []
//   )
//   const data = React.useMemo(() => data, [])
//   return (
//     <>
//       <Table columns={columns} data={data} />
//     </>
//   )
// }
exports.default = TableCompenent;
//# sourceMappingURL=Table.js.map