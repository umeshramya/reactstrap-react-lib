import next from 'next'
import React, { ReactElement, useState, useEffect } from 'react'
import {GrCaretNext, GrChapterNext, GrCaretPrevious, GrChapterPrevious} from 'react-icons/gr'
import {Col, Input, Row} from "reactstrap"

type side = "Server"  | "Client"

interface Props {
    pageNo          : number;
    pageFrom        : [side:side,  Function:(...arg: any)=>Promise<any[]>]

}

export  function NextAndPrevious(props: Props): ReactElement {
    const [pageNo, setPageNo] = useState(1)



    const firstPage = async(e:any)=>{
        let curdata = await props.pageFrom[1]()
        return curdata;

    }

    const lastPage = async(e:any)=>{
        let curdata = await props.pageFrom[1]()
        return curdata;

    }

    const pageNoHandle = (e:any)=>{
        let value:number = parseInt(e.target.value);
        if(value < 1 ){
            value = 0;
        }
        setPageNo(value);
    }

    const nextPage= async(e:any)=>{
       
        // check server vs clinet
        if(props.pageFrom[0] === "Server"){
           let curdata = await props.pageFrom[1]()
           return curdata;
 
        }


        // if server look data given or to get from api

    }

    const previousPage = async(e:any)=>{
 
        let curdata = await props.pageFrom[1]();
        return curdata
        
    }
    return (
        <>
        <Row >
            <Col style={{display : "flex", justifyContent : "end"}}>
                {
                    props.pageFrom[0] !== "Server" ?
                    < GrChapterPrevious size={"35px"}  onClick= {(e)=> firstPage(e)} style={{cursor : "pointer"}}/>
                    :""
                }
                
            </Col>
            <Col style={{display : "flex", justifyContent : "end"}}>
                < GrCaretPrevious size={"35px"}  onClick= {(e)=> previousPage(e)} style={{cursor : "pointer"}}/>
            </Col>
            <Col style={{display : "flex", justifyContent : "center"}}>
                <Input type="number" value ={pageNo} onChange={(e)=>pageNoHandle(e)} width={"23px"}/>
            </Col>
            <Col style ={{display : "flex", justifyContent : "start"}}>
                <GrCaretNext size={"35px"} onClick= {(e)=> nextPage(e)} style={{cursor : "pointer"}} />
            </Col>
            <Col style ={{display : "flex", justifyContent : "start"}}>
                {
                    props.pageFrom[0] !== "Server" ?
                    <GrChapterNext size={"35px"} onClick= {(e)=> lastPage(e)} style={{cursor : "pointer"}} />:
                    ""

                }
                
            </Col>
        </Row>
        </>
    )
}
