import{ButtonP, FormSubmit} from "reactstrap-react-lib"
import React,{useState} from 'react'
import {Container, Row, Col, FormGroup, Input, Label} from "reactstrap"



function submitForm() {
    const iObj = {firstName:"", lastName : ""}
    const [obj, setObj] = useState(iObj)
    const [successStateessage, setsuccessStateessage] = useState("")
    const [errorStateMessage, setErrorStateMessage] = useState("")
    return (
        <Container>
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
                    errorMessage={errorStateMessage}
                    successMessage={successStateessage}
                    onError={(err)=>{
                        console.log(err.response.data)
                        setErrorStateMessage(err.response.data)
                    }
                    }
                
                />

                </Col>
            </Row>

        </Container>

        
            
    )
}

export default submitForm
