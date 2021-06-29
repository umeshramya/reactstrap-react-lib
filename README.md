# reactstrap-react-lib
This is build with typescript for using  with react and reactstrap
## install this library by using this command
`npm install reactstrap-react-lib`
## use our cli for generating forms and table
`npx reactstrap-react-lib-cli`

This contains following lib modules
1. React-Table
2. FormSubmit
3. AdminPanel/Sidebar
3. DeleteForm
4. DateTime widget
5. TimeZone

## React-Table 
### This is react-table following code shows the implimentation.
#### 1. columns prop has to be assigned the way shown in code below. This has following properties
    1. Header 
    2. accessor
    3. Cell
    4. dataType
#### 2. Filter props accepts  one othe follwign strings `Filter : "Global" | "Column" | "Both" | "None"`
#### 3. sort prop is boolean by defualt it is true
#### 4. dataTyle

| Prop         | Possible Values                                    |  Description              |
|--------------|----------------------------------------------------|---------------------------|
| columns      | { Header accessor Cell  dataType}                  |see code below             |
| filter       | "Global" or "Column" or "Both"or "None"            |These are filter for table |
| sort         | boolean                                            |true means allows false no |
| pagination   | object containing functiona                        |                           |                  


```javascript
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
            dataType : "string"

        }
        ,{
            Header : "Date",
            accessor : "date",
            Cell : ({value})=> new Date(value).toDateString(),
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



```
## FormSubmit
This is for submiting data to server. it has inbuilt submit button and also reset button.
1. declare states as {} your component asign it curObj prop like this `={["POST", curObj]}`
2. asign your form submission uri to curUri prop
3. onSuccess prop is function which has two arguments first one is response from server and secons one is succusscalback function
4. onError prop is function which has two arguments first one is response from server and second one is Errorcalback function
5. successCalback is prop which has to passed in onSuccess function
6. errorCalback is prop which has to passed in onError function

```javascript
import{FormSubmit} from "reactstrap-react-lib"
import React,{useState} from 'react'
import {Container, Row, Col, FormGroup, Input, Label} from "reactstrap"

function submitForm(props) {

    const initObj = {firstName:"", lastName : "", email : ""}//intial value sof inputs
    const [obj, setObj] = useState(initObj)
    return (
        <Container>
            {/* FormSubmit */}
            <Row>
                <Col>
                
                <FormSubmit
                    Inputs={
                        <>
                            <FormGroup>
                                <Label className="required">Firtname</Label>
                                <Input type="text" value={obj.firstName} onChange={(e)=>setObj({...obj, firstName : e.target.value})} required={true}/>
                            </FormGroup>
                            
                            <FormGroup>
                                <Label>lastName</Label>
                                <Input type="text" value={obj.lastName} onChange={(e)=>setObj({...obj, lastName : e.target.value})} required={true}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>email</Label>
                                <Input type="email" value={obj.email} onChange={(e)=>setObj({...obj, email : e.target.value})} required={true}/>
                            </FormGroup>

                        </>
                    }

                    curObj = {["POST", obj]} //"POST , "GET", "PUT", "DELETE", "ACTON"
                    curUri = "/api/auth/login" //login


                    onSuccess = {(res)=>{
                        return res.data.mes // mes is key of json sent from api
                    }}

                    onError={(err)=>{
                        return err.response.data
                    }
                    }
                    

                    validation ={()=>{
                        // return "validation error"
                        // if no error return ""
                       
                        return ""
                    }}

  
                    
                    reset={()=>setObj(initObj)}// this resets the inputs to intialstate
                    AxiosRequestConfig={{//axios config setting}}
                
                />
                </Col>
            </Row>
         </Container>
      }


```



## AdminPanel / Sidebar
### This is for admin panel

```javascript
import{SectioPanel,Sidebar} from "reactstrap-react-lib"
import React,{useState} from 'react'


function AdminPanel(props) {
    const Employee =[

        {name : "create", link : "/employee/create"},
        {name : "edit", link : "/employee/edit"},
        {name : "delete", link : "/employee/delete"},
                    ]
    const Shifts = [
        {name : "create", link : "/shifts/create"},
        {name : "edit", link : "/shifts/edit"},
        {name : "delete", link : "/shifts/delete"},
    ]

    const Roster = [
        {name : "create", link : "/shifts/create"},
        {name : "edit", link : "/shifts/edit"},
        {name : "delete", link : "/shifts/delete"},
    ]

    const Onboarding = [
        {name : "create", link : "/shifts/create"},
        {name : "edit", link : "/shifts/edit"},
        {name : "delete", link : "/shifts/delete"},
    ]


   const  section  = [
        {title : "Employee",sectionElements : Employee},
        {title : "Shifts", sectionElements : Shifts},
        {title : "Roster", sectionElements : Roster},
        {title : "Onboarding", sectionElements : Onboarding}

    ]

        return(
                <Sidebar
                    Main ={<h3>Component to rendered here </h3>}
                    orgName = "JJH Hubli"
                    userName = "umesh"
                    siderBarLinks ={[
                        {name : "Zoho", link : "/admin/Zoho"},
                        {name : "Employee", panel: {"panelTitle": "Employee" , "section" :  section }}
                    ]}


                />
            

            </Col>
        </Row>
    )


}
```


## FormDelete

```javascript
import{FormDelete} from "reactstrap-react-lib"
import React,{useState} from 'react'
import {Container, Row, Col, FormGroup, Input, Label} from "reactstrap"

function deleteForm(props) {
    return(
        {/* Form Delete */}
            <Row>
                <Col>
                
                    <FormDelete
            
                        curUri="api/form-delete"
                        curObj = {["POST", {id : 1}]}
                        onSuccess={(res)=>{
                            return res.data.mes
                        }}
                        onError={(err)=>{
                            console.log(err.response)
                            return err.response.data
                        }}
                    />
                </Col>
            </Row>
    )
     
```

# DateTime widget
```javascript
import React, {useState} from 'react'
import {DateTime} from "reactstrap-react-lib"
import { Row,Col, Container} from "reactstrap"

export default function DateTimeComponent() {

const [dateTime, setDateTime] = useState(null)
  

    
    return (
        <Container>
            <Row>

            <Col sm={12} md={6} lg={4}>
               {dateTime}
            <DateTime
                setDateTime={new Date().toISOString()}
                getDateTime = {(val)=>setDateTime(val)}
            />

            </Col>
        </Row>

        </Container>
        
    )
}
```

# TimeZone 
This is for manippltating date for timezone and UTC
```javascript
const { TimeZone } = require("reactstrap-react-lib")

let timeZone = new TimeZone()// sets current time stamp to UTC time zone
timeZone.setDate(new Date())// sets passed date time to UTC time zone
console.log(timeZone.setDate(new Date()).convertToDataBaseString())// return string date
console.log(timeZone.setUTCToSystemTimeZone().convertToDataBaseString())// retunr string date in system time zone

console.log(curdate.substring(0,10),  "Only date")
console.log(curdate.substring(11, 19), "only time")


```
