#Table

```javascript
// sampla data
import React from 'react'
import {Row, Col, Container} from "reactstrap"
import {LinkP, Table} from "reactstrap-react-lib"

export default function table() {

        const data  = [
        { id : 1, name : "umesh", age : 53},
        { id : 2, name : "Ramya", age : 38},
        { id : 3, name : "Pradyumna", age : 21},
        { id : 4, name : "Prajnya", age : 21},
        { id : 5, name : "Nischita", age : 11},
    ]

    const columns = [
        {
            Header : "Id",
            accessor : "id",
            Cell : ({value})=> <LinkP link = {`/edit/${value}`} value = {value} />
    
        },
        {
            Header : "Name",
            accessor : "name",

            
        },{
            Header : "Age",
            accessor : "age",

        }
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



```