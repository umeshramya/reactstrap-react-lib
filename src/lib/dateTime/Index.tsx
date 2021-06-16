import React, { ReactElement,useState } from 'react'
import {Input} from "reactstrap"
type dateString= string;
interface Props {
    setDateTime:dateString;
    getDateTime:()=>dateString
    
}

export default function Index(props: Props): ReactElement {
    const [dateTime, setDateTime] = useState(props.setDateTime);

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

    props.getDateTime = ():dateString=>{
        return dateTime;
    }

    return (

        <>
            <Input type="date" value={dateTime.substring(0,10) } onChange={(e)=>setDate(e)}/>
            <Input type = 'time' value={dateTime.substring(11,19)} onChange={(e)=>setTime(e)}/>

        </>
    )
}
