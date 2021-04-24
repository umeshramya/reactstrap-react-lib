import{ButtonP, FormSubmit, FormDelete, SectioPanel,Sidebar} from "reactstrap-react-lib"
import React,{useState} from 'react'
import {Container, Row, Col, FormGroup, Input, Label} from "reactstrap"




function submitForm() {
    const iObj = {firstName:"", lastName : "", email : ""}
    const [obj, setObj] = useState(iObj)

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

    return (
        <Container>
            {/* FormSubmit */}
            <Row>
                <Col>
                
                <FormSubmit
                    Inputs={
                        <>
                            <FormGroup>
                                <Label>Firtname</Label>
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

                    curObj = {["ACTION", obj]}
                    curUri = "api/submit-form/"

                    successCallBack = {(res)=>res.data.mes}

                    onSuccess = {(res, successCallBack)=>{
                        
                        return successCallBack(res);
                    }}

                    onError={(err)=>{
                        console.log(err)
                        return "error ocuu"
                    }
                    }

                    validation ={()=>{
                        // return "validation error"
                        console.log(obj)
                        return ""
                    }}

                    reset={()=>setObj(iObj)}
                    AxiosRequestConfig={{}}
                
                />

                </Col>
            </Row>
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
                          {/* Section Panel */}
            <Row>
                <Col>
            
 
                {/* <SectioPanel
                    panelTitle={"Employee"}
                    section = {[
                        {title : "Employee",sectionElements : Employee},
                        {title : "Shifts", sectionElements : Shifts},
                        {title : "Roster", sectionElements : Roster},
                        {title : "Onboarding", sectionElements : Onboarding}
                    ]}
                /> */}

                    <Sidebar
                        Main ={<h3>Umesh </h3>}
                        orgName = "JJH Hubli"
                        userName = "umesh"
                        siderBarLinks ={[
                            {name : "Zoho", link : "/admin/Zoho"},
                            {name : "Employee", panel: {"panelTitle": "Employee" , "section" :  section }}
                        ]}


                    />
                

                </Col>
            </Row>
        
        </Container>

        
            
    )
}

export default submitForm
