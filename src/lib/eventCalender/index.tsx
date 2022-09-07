import React, { useState } from 'react'
import {Col, Row, Table} from "reactstrap"
import { getMonth } from './util'

const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] as const
type month= typeof months[number]
interface Props{
    month:month
    year:number
}

const EventCalendar = (props: Props) => {
    const [monthArray, setMonthArray] = useState(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])
console.table(getMonth(5,2022))
    


  return (
    <>
        <Row>
            <Col>
                <Table>
                    <thead>
                        <tr>
                            <th>
                                Sunday
                            </th>
                            <th>
                                Monday
                            </th>
                            <th>
                                Tuesday
                            </th>
                            <th>
                            Wednesday
                            </th>
                            <th>
                            Thursday
                            </th>
                            <th>
                                Friday
                            </th>
                            <th>
                            Saturday
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </Table>
            
            </Col>
        </Row>
    </>
    
  )
}

export default EventCalendar
