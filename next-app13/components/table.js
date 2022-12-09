import React,{useState, useEffect} from 'react'
import {Row, Col, Container} from "reactstrap"
import {LinkP, Table} from "reactstrap-react-lib"
import data from "../MOCK_DATA .json"

// {"id":1,"first_name":"Aubine","last_name":"McClenaghan","email":"amcclenaghan0@prnewswire.com","gender":"Polygender","ip_address":"11.4.220.200","date":"2020-08-17"}

export default function table() {
    const [pageData, setpageData] = useState([])
    const [pagesize, setPagesize] = useState(100)
    useEffect(() => {
        pageDataHandle(0)
        return () => {}
    }, [data])

    const pageDataHandle = (pageNo)=>{
        let pageStart = pageNo * pagesize
        let curPageData = data.slice ( pageStart , pageStart + pagesize)
    
        setpageData(curPageData)
    }

    const columns = [
        {
            Header : "Id",
            accessor : "id",
            Cell : ({value})=> <LinkP link = {`/edit/${value}`} value = {value} />,
            dataType : "number"
            
    
        },
        {
            Header : "first_name",
            accessor : "first_name",
            dataType : "string"

            
        },{
            Header : "last_name",
            accessor : "last_name",
            dataType : "string"

            
        },{
            Header : "email",
            accessor : "email",
            dataType : "string"

            
        },{
            Header : "gender",
            accessor : "gender",
            dataType : "string"

            
        },
        {
            Header : "ip_address",
            accessor : "ip_address",
            dataType : "string",
            Cell : ({value, row})=>`${value} and ${row.gender} and ${row.id}`

        }
        ,{
            Header : "Date",
            accessor : "date",
            Cell : ({value, row})=> new Date(value).toDateString(),
            dataType : "Date"

        }
    ]

    return (
        <>
            <Container>
                    <Row>
                        <Col>
                            <Table
                                columns={columns}
                                data={pageData}
                                filter= "Both"
                                // sort = {false}
                                pagination = {{
                                "nextPage" : (pageNo)=>{

                                    pageDataHandle(pageNo)
                                    return true;
                                },
                                "previousPage" : (pageNo) =>{

                                    pageDataHandle(pageNo)
                                    return true
                                }
                               
                            }}
                               
                                

                            />
                        </Col>
                    </Row>
            </Container>
            
        </>

    )
}


