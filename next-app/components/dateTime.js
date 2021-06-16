import React, {useRef, useState} from 'react'
import {DateTime} from "reactstrap-react-lib"
import { Row,Col, Container} from "reactstrap"

export default function DateTimeComponent() {

const [dateTime, setDateTime] = useState(null)
  

    
    return (
        <Container>
            <Row>

            <Col sm={12} md={6} lg={3}>
                <h4>{dateTime}</h4>
            <DateTime
                value={new Date().toISOString()}
                // getDateTime = {(val)=>setDateTime(val)}
            />

            </Col>
        </Row>

        </Container>
        
    )
}
