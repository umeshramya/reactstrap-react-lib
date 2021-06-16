import React, { ReactElement,useState } from 'react'
import {Input, Row, Col} from "reactstrap"
type dateString= string;

interface Props {
    setDateTime:dateString;
    getDateTime:(val:dateString)=>void;
    
}

export default function Index(props: Props): ReactElement {
    
    const [dateTimeState, setDateTimeState] = useState(props.setDateTime);

    const setDate = (e:any)=>{
        let date = e.target.value;
        let preDate = dateTimeState.substring(0,10);
        let newDate = dateTimeState.replace(preDate, date);
        props.getDateTime(newDate)
        setDateTimeState(newDate);

    }



    const setTime = (e:any)=>{
        
        let time = e.target.value;
        let preTime = dateTimeState.substring(11, 19);

        let newTime = dateTimeState.replace(preTime, `${time}`);
        props.getDateTime(newTime)
        setDateTimeState(newTime);

       
    }







    return (

        <>
            <Row noGutters={true}>
                <Col sm={6}>
                <Input type="date" value={dateTimeState.substring(0, 10)} onChange={(e)=>setDate(e)} />
                </Col>
                <Col sm={6}>
                <Input type = 'time' value={dateTimeState.substring(11,19)} onChange={(e)=>setTime(e)}/>
                </Col>
            </Row>
            
            

        </>
    )
}
