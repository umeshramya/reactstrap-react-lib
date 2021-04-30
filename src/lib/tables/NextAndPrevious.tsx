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
            <Col className = "justify-content-center">
                <GrCaretPrevious onClick= {(e)=> previous(e)} style={{cursor : "pointer"}}/>
            </Col>
            <Col className = "justify-content-center">
                <Input type="number" value ={pageNo} onChange={(e)=>pageNoHandle(e)} width={"23px"}/>
            </Col>
            <Col className = "justify-content-center">
                <GrCaretNext  onClick= {(e)=> next(e)} style={{cursor : "pointer"}} />
            </Col>
            
        </Row>
        </>
    )
}
