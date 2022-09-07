import React, { useEffect, useState } from 'react'
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
    const [monthMatrix, setMonthMatrix] = useState<any[][]>(()=>{
        const monthIndex = monthArray.indexOf(props.month as any)
        const temTonthMatrix=getMonth(monthIndex, props.year)
        return temTonthMatrix
    })
    
    // useEffect(() => {
    //     const monthIndex = monthArray.indexOf(props.month as any)
    //     const temTonthMatrix=getMonth(monthIndex, props.year)
    //     // console.table(temTonthMatrix)
    //     setMonthMatrix(temTonthMatrix)
    //   return () => {}
    // }, [])
    
    


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
                        {
                            monthMatrix.map((el, i)=>{
                                return(<tr key={i}>
                                    {
                                        el.map((dl,ind)=>{
                                            return<td key={ind}>{dl.getDate()}</td>
                                        })
                                    }
                                </tr>)
                            })
                        }

                    </tbody>
                </Table>
            
            </Col>
        </Row>
    </>
    
  )
}

export default EventCalendar
