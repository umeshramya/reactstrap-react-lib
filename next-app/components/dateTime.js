import React, {useState} from 'react'
import {DateTime, Moment} from "reactstrap-react-lib"
import { Row,Col, Container} from "reactstrap"

export default function DateTimeComponent() {

const [dateTime, setDateTime] = useState(null)
  

    
    return (
        <Container>
            <Row>

            <Col sm={12} md={6} lg={4}>
               {dateTime}
            <DateTime
                setDateTime={new Moment().setUtcToSystemTimeZone().convertToDataBaseString()}
                // getDateTime = {(val)=>{
                //     // let moment = new Moment();
                //     // let utcDate =  moment._getUTCDateTime(new Date(val))
                //     // let dataBaseString = moment._convertToDataBaseString(utcDate)
                //     // setDateTime(new Moment(new Date(val)).setSystemTimeZoneToUTC().convertToDataBaseString())
                // }}

                getDateTime = {(val)=>{
                    setDateTime(new Moment(new Date(val)).convertToDataBaseString())
                }}
            />

            </Col>
        </Row>

        </Container>
        
    )
}
