import React from 'react'
import {Row, Col, Container} from "reactstrap"
import {LinkP, Table} from "reactstrap-react-lib"



export default function table() {

    const columns = [
        {
            Header : "Id",
            accessor : "id",
            Cell : ({value})=> <LinkP link = {`/edit/${value}`} value = {value} />,
            dataType : "number"
            
    
        },
        {
            Header : "Name",
            accessor : "name",
            dataType : "string"

            
        },{
            Header : "Age",
            accessor : "age",
            dataType : "number"

        }
        ,{
            Header : "Date",
            accessor : "date",
            Cell : ({value})=> new Date(value).toDateString(),
            dataType : "Date"

        }
    ]

    const data  = [
        { id : 1, name : "umesh", age : 53,     date : "1969-09-29"},
        { id : 2, name : "Ramya", age : 38,     date : "1983-08-11"},
        { id : 3, name : "Pradyumna", age : 21, date : "1999-12-03"},
        { id : 4, name : "Prajnya", age : 21,   date : "1999-12-03"},
        { id : 5, name : "Nischita", age : 11,  date : "1999-01-02"},
    ]
    return (
        <>
            <Container>
                    <Row>
                        <Col>
                            <Table
                                columns={columns}
                                data={data}
                                filter= "Both"
                                // sort = {false}
                                pagination = {{
                                "nextPage" : (pageNo)=>pageNo+1,
                                "previousPage" : (pageNo) =>pageNo -1
                            }}
                               
                                

                            />
                        </Col>
                    </Row>
            </Container>
            
        </>

    )
}


