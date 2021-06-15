import React, { ReactElement,useState } from 'react'
import {Input} from "reactstrap"

interface Props {
    value:string;
    
}

export default function Index(props: Props): ReactElement {
    const [dateTime, setDateTime] = useState(props.value);

    const setDate = (e:any)=>{
        let date = e.target.value;
        let preDate = dateTime.substring(0,10);
        let newDate = dateTime.replace(preDate, date);
        setDateTime(newDate);

    }

    const setTime = (e:any)=>{
        
        let time = e.target.value;
        let preTime = dateTime.substring(11, 19);
        console.log(preTime)
        let newTime = dateTime.replace(preTime, `${time}`);
        setDateTime(newTime);

       
    }
    return (

        <>
            <Input type="date" value={dateTime.substring(0,10) } onChange={(e)=>setDate(e)}/>
            <Input type = 'time' value={dateTime.substring(11,19)} onChange={(e)=>setTime(e)}/>

        </>
    )
}
