import{ButtonP, FormSubmit, FormDelete} from "reactstrap-react-lib"
import React,{useState} from 'react'
import {Container, Row, Col, FormGroup, Input, Label} from "reactstrap"



function submitForm() {
    const iObj = {firstName:"", lastName : ""}
    const [obj, setObj] = useState(iObj)



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
                                <Input type="text" value={obj.lasttName} onChange={(e)=>setObj({...obj, lasttName : e.target.value})} required={true}/>
                            </FormGroup>

                        </>
                    }

                    curObj = {obj}
                    curUri = "api/submit-form"

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
                        return ""
                    }}
                
                />

                </Col>
            </Row>
            {/* Form Delete */}
            <Row>
                <Col>
                
                    <FormDelete
                        id="1"
                        curUri="api/form-delete"
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
        </Container>

        
            
    )
}

export default submitForm
