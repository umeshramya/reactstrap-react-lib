import next from 'next'
import React, { ReactElement, useState } from 'react'
import {GrCaretNext, GrChapterNext, GrCaretPrevious, GrChapterPrevious} from 'react-icons/gr'
import {Col, Input, Row} from "reactstrap"

interface Props {
    pageNo          : number;
    pageSize        : number;
    data            : [];
    nextPageApi     : Function;
    preViousPageApi : Function;
    firstPageApi    : Function;
    lastPageApi     : Function;
}

export  function NextAndPrevious(props: Props): ReactElement {
    const [pageNo, setpageNo] = useState(1)

    const firstPage = (e:any)=>{

    }

    const lastPage = (e:any)=>{

    }

    const pageNoHandle = (e:any)=>{
        setpageNo(e.target.value);
    }

    const nextPage= (e:any)=>{

    }

    const previousPage = (e:any)=>{

    }
    return (
        <>
        <Row >
            <Col style={{display : "flex", justifyContent : "end"}}>
                < GrChapterPrevious size={"35px"}  onClick= {(e)=> firstPage(e)} style={{cursor : "pointer"}}/>
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
                <GrChapterNext size={"35px"} onClick= {(e)=> lastPage(e)} style={{cursor : "pointer"}} />
            </Col>
            
            
        </Row>
        </>
    )
}
