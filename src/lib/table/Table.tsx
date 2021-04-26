import React, { ReactElement } from 'react'
import {Table} from "reactstrap"


interface column{
    header:string;
    accassor:string;
}

interface Props {
    columns:column[]
    data:[]
}

export default function TableCompenent({columns, data}: Props): ReactElement {
    return (

        <>
            <Table>
                <thead>
                    <tr>
                        {
                           columns.map((col, index)=>{
                               return(
                                   <th key={index}>
                                        <strong>{col.header}</strong>
                                   </th>
                               )
                           })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((row, index)=>{
                            return(
                                <tr key={index}>
                                    {
                                        columns.map((col, rindex)=>{
                                            return(
                                                <td key={rindex}>
                                                    {
                                                        row[col.accassor]
                                                    }
                                                </td>
                                            )
                                        })
                                       
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>

            </Table>

        </>
    )
}

