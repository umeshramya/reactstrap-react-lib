import React, { ReactElement,useState } from 'react'
import {Input} from "reactstrap"
type dateString= string;

interface Props {
    setDateTime:dateString;
    getDateTime?:(fun:(val:dateString)=>void)=>dateString;
    
}

export default function Index(props: Props): ReactElement {
    
    const [dateTimeState, setDateTimeState] = useState(props.setDateTime);

    const setDate = (e:any)=>{
        let date = e.target.value;
        let preDate = dateTimeState.substring(0,10);
        let newDate = dateTimeState.replace(preDate, date);
        setDateTimeState(newDate);

    }



    const setTime = (e:any)=>{
        
        let time = e.target.value;
        let preTime = dateTimeState.substring(11, 19);

        let newTime = dateTimeState.replace(preTime, `${time}`);
        setDateTimeState(newTime);

       
    }


    props.getDateTime = (fun:(val:dateString)=>void):dateString=>{
        fun(dateTimeState);
        return dateTimeState;
    }




    return (

        <>

            <Input type="date" value={dateTimeState.substring(0, 10)} onChange={(e)=>setDate(e)}/>
            <Input type = 'time' value={dateTimeState.substring(11,19)} onChange={(e)=>setTime(e)}/>

        </>
    )
}
