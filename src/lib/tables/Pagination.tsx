import next from 'next'
import React, { ReactElement, useState, useEffect } from 'react'
import {GrCaretNext, GrChapterNext, GrCaretPrevious, GrChapterPrevious} from 'react-icons/gr'
import {Col, Input, Row} from "reactstrap"

type side = "Server"  | "Client"

export interface PaginationProps {

    pageFrom        ?: side;
    firstPage       ?: (pageNo:number, pageSize?:number, ...arg:any[])=>Promise<number>
    lastPage        ?: (pageNo:number, pageSize?:number, ...arg:any[])=>Promise<number>
    nextPage        ?: (pageNo?:number, pageSize?:number, ...arg:any[])=>Promise<boolean>
    previousPage    ?: (pageNo?:number, pageSize?:number, ...arg:any[])=>Promise<boolean>
}


    export  function Pagination(
    {

    pageFrom    = "Server", 
    firstPage   = async()=>1,
    lastPage   = async()=>1,
    nextPage   = async()=>false,
    previousPage   = async()=>false,
}: PaginationProps): ReactElement {

    const [stPageNo, setStPageNo] = useState(0)



    const firstPageHandle = async(firstPage:PaginationProps["firstPage"]):Promise<void>=>{
        if(firstPage !== undefined){
            let pageNumber  = await  firstPage(0)
            pageNumber === 0 ? setStPageNo(0) : 0;
        }


    }

    const lastPageHandle = async(lastPage:PaginationProps["lastPage"]):Promise<void>=>{
        if(lastPage !== undefined){
        let pageNumber = await lastPage(stPageNo)
         pageNumber >= 0 ?  setStPageNo(stPageNo) : 0;
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
        let newPageNo = stPageNo + 1;
        if(nextPage !== undefined){
            let pageSet = await nextPage(newPageNo)
             pageSet ? setStPageNo(newPageNo) : 0;
        }

    }

    const previousPageHandle = async(previousPage:PaginationProps["previousPage"]):Promise<void>=>{
            let newPageNo = 0
            if(stPageNo > 0){
                newPageNo = stPageNo - 1;
            }
            if(previousPage !== undefined){
                let pageSet = await previousPage(newPageNo);
                pageSet ? setStPageNo(newPageNo) : 0;
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
