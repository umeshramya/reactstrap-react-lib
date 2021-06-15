import React from 'react'
import {DateTime} from "reactstrap-react-lib"
import { Row,Col, Container} from "reactstrap"

export default function DateTimeComponent() {
    return (
        <Container>
            <Row>
            <Col sm={12} md={6} lg={3}>
            <DateTime
                value={new Date().toISOString()}
            />

            </Col>
        </Row>

        </Container>
        
    )
}
