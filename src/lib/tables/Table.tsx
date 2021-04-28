import React, { ReactElement, useEffect, useState } from 'react'
import { Table, Row, Col, Input } from "reactstrap"
import { Props, column } from "./index"





export default function TableCompenent({ columns, data,filter, sort }: Props): ReactElement {

    /**
     * This is state forn data prop
     */
    const [stData, setstData] = useState([])
    /**
     * This is state for all column filterobject to manege input value and onChange event
     */
    const [fillterObj, setfillterObj] = useState({}) as any;
    /**
     * creats the filterObject state 
     * dervide from accessor 
     * This called by useEffect
     */
    const filterObjHandleInit = ()=>{
        let keys = columns.map(col=>col.accessor);
        let obj:any = {};
        keys.forEach(key=>{
           obj[key]=""
        })
        setfillterObj(obj)

    }


    /**
     * this set the two states one is stDate other is filetrObject
     */
    useEffect(() => {
        setstData(data);
        filterObjHandleInit();
        return () => { }
    }, [data])



    /**
     * This function filters the stData state . also reset the filterObject intial state and assign the consernbed accessor to e.tartget value
     * @param e e is is event from input elemnt for cvolumn filter
     * @param accessor this is accessor from column prop
     */
    const filterOnChangeHandle = (e: any, accessor: string) => {

        let tempFilterObject:any = {};// creeat tempFlterObject
        Object.assign(tempFilterObject, fillterObj);//assign tempFilterObject to filterObject Sate
        
        // set all keys to "" thus clearing all inputs
        for (const key in tempFilterObject) { 
            tempFilterObject[key]="";
        }
        tempFilterObject[accessor]= e.target.value;//for conserned accssor or input aset the value
        setfillterObj(tempFilterObject);// change the state of FilterObject
        
        //filter the data 
        let tempData = data.filter(o => {
            let searchString =`${o[accessor]}`
            if (searchString.toLocaleLowerCase().search(e.target.value.toString().trim().toLocaleLowerCase()) >= 0) {
                return o;
            }
        })
        setstData(tempData);
    }



/**
 * 
 * @param row row in table
 * @param col col in table
 * @returns returns the  / value of table
 */
    const tdHandle = (row: any, col: column) => {
        let ret: any;
        let value = row[col.accessor];
        if (col.Cell) {
            ret = col.Cell({ value })
        } else {
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
                            columns.map((col, index) => {
                                return (
                                    <th key={index}>

                                        <strong>{col.Header}</strong>

                                        {
                                            filter == "Column"  || filter == "Both"   ? 
                                            <Input type="text"
                                            value = {fillterObj[col.accessor]}
                                            onChange={(e) => filterOnChangeHandle(e, col.accessor)} 
                                            placeholder={`Search by ${col.accessor}`}
                                            /> : ""
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
                                                        tdHandle(row, col)

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

