import React from 'react'
import {EventCalendar} from "reactstrap-react-lib"
import {Row, Col} from "reactstrap"

function Event({date, month, year}) {
  return (

    <Row className='text-primary'>
      <Col role='button'  onClick={()=>alert(new Date(date).toDateString())}>
        {new Date(date).getDate()}
        
      </Col>
    </Row>
  )
}

export default EventCalendar(Event)


