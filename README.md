# reactstrap-react-lib

This is build with typescript for using  with react and reactstrap

This contains forloowing lib modules
1. AlertP
2. ButtonP
3. ModelP
4. FormSubmit
5. FormDelete

## FormSubmit
This is for submiting data to server. it has inbuilt submit button and also reset button.
1. declare states as {} your component asign it curObj prop
2. asign your form submission uri to curUri prop
3. onSuccess prop is function which has two arguments first one is response from server and secons one is succusscalback function
4. onError prop is function which has two arguments first one is response from server and second one is Errorcalback function
5. successCalback is prop which has to passed in onSuccess function
6. errorCalback is prop which has to passed in onError function


## Rreact-Table

```javascript
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
                                

                            />
                        </Col>
                    </Row>
            </Container>
            
        </>

    )
}



```

