import React from 'react'
import {Col, Row, Table} from "reactstrap"

const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] as const
type month= typeof months[number]
interface Props{
    month:month
    year:number
}

const EventCalendar = (props: Props) => {
    const getweakDayindex=(date:Date):number=>{
        const curdate=new Date(date).getDay()
        return curdate
    }
    
    const getDaysInMonth=():Date[]=> {
        const month = months.findIndex(props.month as any)
        const year = props.year
        var date = new Date(year, month, 1);
        var days:Date[] = [];
        while (date.getMonth() === month) {
          days.push(new Date(date));
          date.setDate(date.getDate() + 1);
        }
        return days;
      }

      const fillCalendar = ():any=>{
        let ret:any=""
        getDaysInMonth().forEach((el, i)=>{
            const weakday = getweakDayindex(el)
            if(weakday == 0 || i<=6){
                // start new week
                ret=`${ret}<tr>`
                if(weakday == 0){
                    ret=`${ret}<td>${el.getDate()}</td>`
                }else{
                    ret=`${ret}<td></td>`
                }
            }
            if(weakday == 1){
                ret=`${ret}<td>${el.getDate()}</td>`
            }else{
                ret=`${ret}<td></td>`
            }
            if(weakday == 2){
                ret=`${ret}<td>${el.getDate()}</td>`
            }else{
                ret=`${ret}<td></td>`
            }
            if(weakday == 3){
                ret=`${ret}<td>${el.getDate()}</td>`
            }else{
                ret=`${ret}<td></td>`
            }
            if(weakday == 4){
                ret=`${ret}<td>${el.getDate()}</td>`
            }else{
                ret=`${ret}<td></td>`
            }
            if(weakday == 5){
                ret=`${ret}<td>${el.getDate()}</td>`
            }else{
                ret=`${ret}<td></td>`
            }

            if(weakday == 6 || i == 6){
                if(weakday == 6){
                    ret=`${ret}<td>${el.getDate()}</td>`
                }else{
                    ret=`${ret}<td></td>`
                }
                // end weak
                ret = `${ret}</tr>`
            }
        })
      }

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
                            fillCalendar()
                        }
                    </tbody>
                </Table>
            
            </Col>
        </Row>
    </>
    
  )
}

export default EventCalendar
