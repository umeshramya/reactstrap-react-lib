import React from 'react'
import {EventCalendar} from "reactstrap-react-lib"

function Event({date, month, year}) {
  return (

    <div>
      {month == new Date(date).getMonth() ? new Date(date).getDate(): ""}
      {/* {new Date(date).toDateString()} */}
      
    </div>
  )
}

export default EventCalendar(Event)


