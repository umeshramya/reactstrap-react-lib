import React, { ReactElement, useState } from 'react'
import {Row, Col, FormGroup, Input} from "reactstrap"
import GlobalFilter from "./GlobalFilter"
import TableCompenent from "./Table"


 export interface column{
    Header:string;
    accessor:string;
    Cell ?:({})=>ReactElement;
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

