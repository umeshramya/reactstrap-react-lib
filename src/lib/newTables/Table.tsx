import React, { ReactElement } from 'react'
import {Table} from "reactstrap"


interface column{
    header:string;
    accassor:string;
}

interface Props {
    columns:column[]
    data:{}[]
}

export default function TableCompenent({columns, data}: Props): ReactElement {
    return (

        <>
            <Table>
                <thead>
                    <tr>
                        {
                            columns.map(el=><th><strong>{el.header}</strong></th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((row, index)=>{
                            return(
                                <tr>
                                    {
                                        // write code here
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

