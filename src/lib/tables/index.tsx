import React, { ReactElement, useState } from 'react'
import {Row, Col, FormGroup, Input} from "reactstrap"
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
        let value = e.target.value;
        setSearch(value);
        //code here for filter
        let keys = columns.map(col=>col.accessor);


        let tempData = data.filter(o=>{
            let oString = `${Object.values(o).toString()}`;


          if(oString.toLowerCase().search(value.trim().toString().toLowerCase()) >= 0){
             return o;
          }

        }) as typeof data
   

        setstData(tempData)


    }

    return (
        <>
            <Row>
                <Col sm={12} md={6}>
                    <FormGroup>
                        <Input type="text" value={search} onChange={(e)=>SerachHandle(e)} placeholder="Search" />
                    </FormGroup>
                </Col>
                <Col sm={12} md={6}>
                </Col>
            </Row>
            <TableCompenent
                data = {stData}
                columns= {columns}
            />
        </>
    )
}

