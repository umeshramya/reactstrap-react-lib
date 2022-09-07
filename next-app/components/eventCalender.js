import React from 'react'
import {EventCalendar} from "reactstrap-react-lib"

function Event({date}) {
  return (
    <div>{new Date(date).toDateString()}</div>
  )
}

export default EventCalendar(Event)


