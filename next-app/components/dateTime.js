import React, {useRef, useEffect} from 'react'
import {DateTime} from "reactstrap-react-lib"
import { Row,Col, Container} from "reactstrap"

export default function DateTimeComponent() {
    const DateTimeRef = useRef()
  

    
    return (
        <Container>
            <Row>
            <Col sm={12} md={6} lg={3}>
            <DateTime
                value={new Date().toISOString()}
                ref = {DateTimeRef}
                
                
            />

            </Col>
        </Row>

        </Container>
        
    )
}
