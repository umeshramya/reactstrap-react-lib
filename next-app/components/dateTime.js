import React, {useState} from 'react'
import {DateTime} from "reactstrap-react-lib"
import { Row,Col, Container} from "reactstrap"

export default function DateTimeComponent() {

const [dateTime, setDateTime] = useState(null)
  

    
    return (
        <Container>
            <Row>

            <Col sm={12} md={6} lg={4}>
               {dateTime}
            <DateTime
                setDateTime={new Date().toISOString()}
                getDateTime = {(val)=>setDateTime(val)}
            />

            </Col>
        </Row>

        </Container>
        
    )
}
