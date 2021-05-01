import next from 'next'
import React, { ReactElement, useState, useEffect } from 'react'
import {GrCaretNext, GrChapterNext, GrCaretPrevious, GrChapterPrevious} from 'react-icons/gr'
import {Col, Input, Row} from "reactstrap"

type side = "Server"  | "Client"

export interface PaginationProps {
    pageNo          ?: number;
    pageFrom        ?: side;
    firstPage       ?: (...arg:any[])=>Promise<any[]>
    lastPage        ?: (...arg:any[])=>Promise<any[]>
    nextPage        ?: (...arg:any[])=>Promise<any[]>
    previousPage    ?: (...arg:any[])=>Promise<any[]>


}

export  function Pagination(
    {pageNo     = 1, 
    pageFrom    = "Server", 
    firstPage   = async()=>[],
    lastPage   = async()=>[],
    nextPage   = async()=>[],
    previousPage   = async()=>[],
}: PaginationProps): ReactElement {
    const [stpageNo, setStPageNo] = useState(1)



    const firstPageHandle = async(firstPage:Function):Promise<any[]>=>{
        let curdata = await  firstPage()
        return curdata;

    }

    const lastPageHandle = async(lastPage:Function):Promise<any[]>=>{
        let curdata = await lastPage()
        return curdata;

    }

    const pageNoHandle = (e:any)=>{
        let value:number = parseInt(e.target.value);
        if(value < 1 ){
            value = 0;
        }
        setStPageNo(value);
    }

    const nextPageHandle= async(nextPage:Function):Promise<any[]>=>{
           let curdata = await nextPage()
           return curdata;
    }

    const previousPageHandle = async(previousPage:Function):Promise<any[]>=>{
        let curdata = await previousPage();
        return curdata
        
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
                <Input type="number" value ={stpageNo} onChange={(e)=>pageNoHandle(e)} width={"23px"}/>
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
