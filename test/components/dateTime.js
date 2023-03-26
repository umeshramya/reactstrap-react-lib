import React, { useState } from 'react'
import { DateTime, TimeZone } from "reactstrap-react-lib"
import { Row, Col, Container } from "reactstrap"

export default function DateTimeComponent() {

    const [dateTime, setDateTime] = useState(null)
    return (
        <Container>
            <Row>

                <Col sm={12} md={6} lg={4}>
                    {dateTime}
                    <DateTime
                        setDateTime={new TimeZone().setUTCToSystemTimeZone().convertToDataBaseString()}
                        onLoad={(val) => console.log(val)}
                        onSetDateTime={(val) => console.log(val)}
                        getDateTime={(val) => {
                            setDateTime(new TimeZone().setDate(new Date(val)).convertToDataBaseString())
                        }}
                    />
                </Col>
            </Row>
        </Container>

    )
}
