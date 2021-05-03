import next from 'next'
import React, { ReactElement, useState, useEffect } from 'react'
import {GrCaretNext, GrChapterNext, GrCaretPrevious, GrChapterPrevious} from 'react-icons/gr'
import {Col, Input, Row} from "reactstrap"

type side = "Server"  | "Client"

export interface PaginationProps {
    // pageNo          ?: number;
    pageFrom        ?: side;
    firstPage       ?: (pageNo:number, pageSize?:number, ...arg:any[])=>Promise<number>
    lastPage        ?: (pageNo:number, pageSize?:number, ...arg:any[])=>Promise<number>
    nextPage        ?: (pageNo:number, pageSize?:number, ...arg:any[])=>Promise<number>
    previousPage    ?: (pageNo:number, pageSize?:number, ...arg:any[])=>Promise<number>
}


    export  function Pagination(
    {
    // pageNo     = 1, 
    pageFrom    = "Server", 
    firstPage   = async()=>0,
    lastPage   = async()=>0,
    nextPage   = async()=>0,
    previousPage   = async()=>0,
}: PaginationProps): ReactElement {

    const [stPageNo, setStPageNo] = useState(1)



    const firstPageHandle = async(firstPage:PaginationProps["firstPage"]):Promise<void>=>{
        if(firstPage !== undefined){
            let curdata = await  firstPage(1)
            setStPageNo(1);
        }


    }

    const lastPageHandle = async(lastPage:PaginationProps["lastPage"]):Promise<void>=>{
        if(lastPage !== undefined){
        let curdata = await lastPage(stPageNo)
        setStPageNo(curdata)
        }

    }

    const pageNoHandle = (e:any)=>{
        let value:number = parseInt(e.target.value);
        if(value < 1 ){
            value = 0;
        }
        setStPageNo(value);
    }

    const nextPageHandle= async(nextPage:PaginationProps["nextPage"]):Promise<void>=>{
        if(nextPage !== undefined){
            let curdata = await nextPage(stPageNo)
            setStPageNo(curdata)
        }

    }

    const previousPageHandle = async(previousPage:PaginationProps["previousPage"]):Promise<void>=>{
        if(previousPage !== undefined){
            let curdata = await previousPage(stPageNo);
            setStPageNo(curdata)
        }

        
    }
    return (
        <>
        <Row >
            <Col style={{display : "flex", justifyContent : "end"}}>
                {
                    pageFrom !== "Server" ?
                    < GrChapterPrevious size={"35px"}  onClick= {(e)=> firstPageHandle(firstPage)} style={{cursor : "pointer"}}/>
                    :""
                }
                
            </Col>
            <Col style={{display : "flex", justifyContent : "end"}}>
                < GrCaretPrevious size={"35px"}  onClick= {(e)=> previousPageHandle(previousPage)} style={{cursor : "pointer"}}/>
            </Col>
            <Col >
                <Input type="number" value ={stPageNo} onChange={(e)=>pageNoHandle(e)} width={"23px"}/>
            </Col>
            <Col style ={{display : "flex", justifyContent : "start"}}>
                <GrCaretNext size={"35px"} onClick= {(e)=> nextPageHandle(nextPage)} style={{cursor : "pointer"}} />
            </Col>
            <Col style ={{display : "flex", justifyContent : "start"}}>
                {
                    pageFrom !== "Server" ?
                    <GrChapterNext size={"35px"} onClick= {(e)=> lastPageHandle(lastPage)} style={{cursor : "pointer"}} />:
                    ""

                }
                
            </Col>
        </Row>
        </>
    )
}
