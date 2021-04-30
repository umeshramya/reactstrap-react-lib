import next from 'next'
import React, { ReactElement, useState } from 'react'
import {GrCaretNext, GrChapterNext, GrCaretPrevious, GrChapterPrevious} from 'react-icons/gr'
import {Col, Input, Row} from "reactstrap"

interface Props {
    
}

export  function NextAndPrevious({}: Props): ReactElement {
    const [pageNo, setpageNo] = useState(1)

    const pageNoHandle = (e:any)=>{

    }

    const next= (e:any)=>{

    }

    const previous = (e:any)=>{

    }
    return (
        <>
        <Row >
            <Col style={{display : "flex", justifyContent : "end"}}>
                < GrChapterPrevious size={"35px"}  onClick= {(e)=> previous(e)} style={{cursor : "pointer"}}/>
            </Col>
            <Col style={{display : "flex", justifyContent : "end"}}>
                < GrCaretPrevious size={"35px"}  onClick= {(e)=> previous(e)} style={{cursor : "pointer"}}/>
            </Col>
            <Col style={{display : "flex", justifyContent : "center"}}>
                <Input type="number" value ={pageNo} onChange={(e)=>pageNoHandle(e)} width={"23px"}/>
            </Col>
            <Col style ={{display : "flex", justifyContent : "start"}}>
                <GrCaretNext size={"35px"} onClick= {(e)=> next(e)} style={{cursor : "pointer"}} />
            </Col>
            <Col style ={{display : "flex", justifyContent : "start"}}>
                <GrChapterNext size={"35px"} onClick= {(e)=> next(e)} style={{cursor : "pointer"}} />
            </Col>
            
            
        </Row>
        </>
    )
}
