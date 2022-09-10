import React, { useEffect, useState } from 'react'
import {Col, FormGroup, Input, Row, Table} from "reactstrap"
import { getMonth } from './util'

const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] as const
type month= typeof months[number]
interface Props{

}

export default  function (Wraper:any) {

    return function  (props: Props){
    const [monthArray, setMonthArray] = useState(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])
    const [month, setMonth] = useState<number>(new Date().getMonth())
    const [year, setYear] = useState<number>(new Date().getFullYear())
    const [monthMatrix, setMonthMatrix] = useState<any[][]>([])

    useEffect(() => {
      setMonthMatrix(getMonth(month, year))
      return () => {}
    }, [year, month])
    
    
  return (
    <>
        <Row>
            <Col>
                <FormGroup>
                    <Input type="select" value={month} onChange={(e)=>setMonth(parseInt(e.target.value))}>
                        {
                            monthArray.map((el, i)=>{
                                return(
                                    <option key={i} value={i}>
                                        {el}
                                    </option>
                                )
                            })
                        }
                    </Input>
                    
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                    <Input type="number" placeholder='Year' value={year} onChange={(e)=>setYear(parseInt(e.target.value))}/>
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col>
            <Table  responsive bordered>
                    <thead>
                        <tr>
                            <th className='text-danger'>
                                Sun
                            </th>
                            <th>
                                Mon
                            </th>
                            <th>
                                Tue
                            </th>
                            <th>
                            Wed
                            </th>
                            <th>
                            Thu
                            </th>
                            <th>
                                Fri
                            </th>
                            <th className='text-warning'>
                            Sat
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            monthMatrix.map((el, i)=>{
                                return(<tr key={i}>
                                    {
                                        el.map((dl,ind)=>{
                                            return(<td key={ind}>
                                                <Wraper {...props} 
                                                date={dl}
                                                month={month}
                                                year = {year}
                                                />
                                            </td>)
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
    
}





