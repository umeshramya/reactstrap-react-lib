import React, { Children, ReactElement } from 'react'
import {Table} from "reactstrap"

interface column{
    Header:string;
    accessor:string;
    Cell ?:({})=>ReactElement;
}

interface Props {
    columns:column[]
    data:[]
}



export default function TableCompenent({columns, data}: Props):ReactElement{

const TD = (row:any, col:column)=>{
        let ret:any;
        let value = row[col.accessor];
        if(col.Cell){
            ret=col.Cell({value})
        }else{
         ret = value
        }
        return ret
        
}


    return (

        <>
            <Table hover responsive bordered>
                <thead>
                    <tr>
                        {
                           columns.map((col, index)=>{
                               return(
                                   <th key={index}>
                                        <strong>{col.Header}</strong>
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
                                                        TD(row,col)
                                                       
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

