import React, { ReactElement, useState } from 'react'
import {Row, Col, FormGroup, Label, Input}from "reactstrap"

interface Props {

}

const GlobalFilter = (props: Props): ReactElement => {
    const [search, setsearch] = useState("")
    return (
        <>
            <Row>
                <Col>
                    <FormGroup>
                        <Label>Search</Label>
                        <Input type="search" value={search} onChange={e=>setsearch(e.target.value)} placeholder="Search" />
                    </FormGroup>
                </Col>
            </Row>
        </>
    )
}


export default React.forwardRef(GlobalFilter)