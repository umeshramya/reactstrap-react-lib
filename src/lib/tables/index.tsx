import React, { ReactElement, useState } from 'react'
import {Row, Col, FormGroup, Input} from "reactstrap"
import GlobalFilter from "./GlobalFilter"
import TableCompenent from "./Table"

/**
 * This column of table whoose array has to be passed as defination of table by user
 */
 export interface column{
     /**
      * Column heading
      */
    Header:string;
    /**
     * key of object of data to be passed to table
     */
    accessor:string;
    /**
     * function component to be passed for display in the cell 
     */
    Cell ?:(value:any)=>ReactElement;
}

export interface Props {
    columns:column[]
    data:[]
}


export default function index({columns, data}: Props): ReactElement {
    const [search, setSearch] = useState("")
    const [stData, setstData] = useState(data)

    const SerachHandle = (e:any)=>{
        setSearch(e.target.value);
        //code here for filter
        let keys = columns.map(col=>col.accessor);

        let tempData = data.filter(o=>Object.values(o).includes(search))
        console.log(tempData)

        // setstData(tempData)


    }

    return (
        <>
            <Row>
                <Col>
                    <FormGroup>
                        <Input type="search" value={search} onChange={SerachHandle} placeholder="Search" />
                    </FormGroup>
                </Col>
            </Row>
            <TableCompenent
                data = {stData}
                columns= {columns}
            />
        </>
    )
}

