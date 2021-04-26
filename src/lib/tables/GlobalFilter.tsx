import React from 'react'
import {Row, Col, Input, FormGroup, Label} from "reactstrap"

interface Props {
    filter:any;
    setFilter:Function
}

export const GlobalFilter = ({filter, setFilter}: Props) => {
    return (
        <>
            <Row>
                <Col>
                    <FormGroup>
                        <Label>Search</Label>
                        <Input type="search" value={filter || ""} onChange={(e)=>setFilter(e.target.value)}/>
                    </FormGroup>
                    
                </Col>
            </Row>
        </>
    )
}
