import React, { ReactElement, useState, useImperativeHandle  } from 'react'
import {Alert} from "reactstrap"

type AlertPHandle={
    alertColor : (color:string)=>void;
    alertText : (text:string)=>void;
    alertLight : (text:string)=>void;
    alertSuccess : (text:string)=>void;
    alertError : (error:any)=>void;
}

const AlertP = React.forwardRef<AlertPHandle>((props, ref): ReactElement =>{
    const [color, setcolor] = useState<string>("light")
    const [text, setText] = useState<string>("");
    useImperativeHandle(ref, ()=>({
        alertColor : (color:string)=>{
            setcolor(color)
        },
        alertText : (text:string)=>{
            setText(text)
        },
        alertLight : (text:string="")=>{
            setText(text)
            setcolor("light")
        },
        alertSuccess : (text:string)=>{
            setText(text)
            setcolor("success")
        },
        alertError : (error:any)=>{
            setcolor("danger")
            if(typeof error.response !== "undefined" ){
                setText(error.response.data)
            }else{
                
                setText(error)
            }
        }
    }))
 
    return (
        <Alert color={color} style={{margin : "10px"}}>
            {text}
        </Alert>
    )
})

export default AlertP