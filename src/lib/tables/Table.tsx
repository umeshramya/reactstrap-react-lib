import React from 'react'

import { useTable} from 'react-table'

import {Table} from "reactstrap"

interface Props{
  columns:any;
  data:any;

}

function TableCompenent({ columns, data }:Props) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,

    
  } = useTable({
    columns,
    data,
  }, )



  // Render the UI for your table
  return (
    <Table {...getTableProps()} responsive striped hover>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th scope="row" {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
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

export default TableCompenent
