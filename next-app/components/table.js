import React from 'react'
import {Row, Col, Container} from "reactstrap"
import {Table} from "reactstrap-react-lib"
import {useRouter}from "next/router"

export default function table() {
    const router = useRouter()
    const columns = [
        {
            Header : "Id",
            accessor : "id",
            Cell     : ({value})=>{
               return(
                  <span onClick={()=>router.push(`/auth/${value}`)}>{value}</span>
               )
            },
    
        },
        {
            Header : "Name",
            accessor : "name",

            
        },{
            Header : "Age",
            accessor : "age",

        }
    ]

    const data  = [
        { id : 1, name : "umesh", age : 53},
        { id : 2, name : "Ramya", age : 38},
        { id : 3, name : "Pradyumna", age : 21},
        { id : 4, name : "Prajnya", age : 21},
        { id : 5, name : "Nischita", age : 11},
    ]
    return (
        <>
            <Container>
                    <Row>
                        <Col>
                            <Table
                                columns={columns}
                                data={data}
                                // filter= "Both"
                                // sort = {false}
                                

                            />
                        </Col>
                    </Row>
            </Container>
            
        </>

    )
}


