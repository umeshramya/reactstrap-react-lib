import React, { ReactElement, useEffect, useState } from 'react'
import { Table, Row, Col, Input } from "reactstrap"
import { Props, column } from "./index"





export default function TableCompenent({ columns, data,filter, sort }: Props): ReactElement {


    const [stData, setstData] = useState([])
    const [fillterObj, setfillterObj] = useState({});

    const filterObjHandle = ()=>{
        let keys = columns.map(col=>col.accessor);
        let obj:any = {};
        keys.forEach(key=>{
           obj[key]=""
        })
        setfillterObj(obj)

    }



    useEffect(() => {
        setstData(data);
        filterObjHandle();
        return () => { }
    }, [data])


    const TD = (row: any, col: column) => {
        let ret: any;
        let value = row[col.accessor];
        if (col.Cell) {
            ret = col.Cell({ value })
        } else {
            ret = value
        }
        return ret

    }


    const filterHandle = (e: any, accessor: string) => {
        
        
    let tempData = data.filter(o => {
            let searchString =` ${o[accessor]}`
            if (searchString.search(e.target.value.toString().trim()) >= 0) {
                return o;
            }
        })

        setstData(tempData);
    }


    return (
        <>

            <Table hover responsive bordered>
                <thead>
                    <tr>
                        {
                            columns.map((col, index) => {
                                return (
                                    <th key={index}>

                                        <strong>{col.Header}</strong>

                                        {
                                            filter == "Column"  || filter == "Both"   ? <Input type="text" onChange={(e) => filterHandle(e, col.accessor)} placeholder={`Search by ${col.accessor}`}/> : ""
                                        }

                                    </th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        stData.map((row, index) => {
                            return (
                                <tr key={index}>
                                    {
                                        columns.map((col, rindex) => {
                                            return (
                                                <td key={rindex}>

                                                    {
                                                        TD(row, col)

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

