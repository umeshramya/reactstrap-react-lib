import { ButtonP, FormSubmit, FormDelete, FormClick } from "reactstrap-react-lib"
import React, { useState } from 'react'
import { Container, Row, Col, FormGroup, Input, Label } from "reactstrap"




function submitForm(props) {

    const iObj = { firstName: "", lastName: "", email: "" }
    const [obj, setObj] = useState(iObj)
    const [submitTrigger, setSubmitTrigger] = useState(false)

    return (
        <Container>
            {/* FormSubmit */}
            <Row>
                <Col>

                    <FormClick
                                            buttonText="Clone click"
                                            curObj={["POST", obj]}
                                            curUri="/api/submit-form"
                    
                                            successCallBack={(res) => res.data.mes}
                    
                                            onSuccess={(res, successCallBack) => {
                    
                                                return successCallBack(res);
                                            }}
                    
                                            onError={(err) => {
                    
                                                return "error ocuu"
                                            }
                                            }
                    
                                            validation={() => {
                                                // return "validation error"
                    
                                                return ""
                                            }}
                    
                                            triggerSubmit={submitTrigger}
                    
                                            reset={() => setObj(iObj)}
                                            AxiosRequestConfig={{}}
                                            showResetButton={true}
                                            recpthaSetting={{
                                                "action": "Submit",
                                                "siteKey": "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                            }}

                    />

                    <FormSubmit
                        Inputs={
                            <>
                                <FormGroup>
                                    <Label className="required">Firtname</Label>
                                    <Input type="text" value={obj.firstName} onChange={(e) => setObj({ ...obj, firstName: e.target.value })} required={true} />
                                </FormGroup>

                                <FormGroup>
                                    <Label>lastName</Label>
                                    <Input type="text" value={obj.lastName} onChange={(e) => setObj({ ...obj, lastName: e.target.value })} required={true} />
                                </FormGroup>
                                <FormGroup>
                                    <Label>email</Label>
                                    <Input type="email" value={obj.email} onChange={(e) => setObj({ ...obj, email: e.target.value })} required={true} />
                                </FormGroup>

                            </>
                        }

                        curObj={["POST", obj]}
                        curUri="/api/submit-form"

                        // successCallBack={(res) => res.data.mes}

                        onSuccess={(res) => {
                            if(obj){
                                setObj(obj)
                            }
                            
                            return res.data.mes
                            // return successCallBack(res);
                        }}

                        onError={(err) => {
                            
                            return "error ocuu"
                        }
                        }

                        validation={() => {
                            // return "validation error"

                            return ""
                        }}

                        triggerSubmit={submitTrigger}

                        reset={() => setObj(iObj)}
                        AxiosRequestConfig={{}}
                        showResetButton={true}
                        recpthaSetting={{
                            "action": "Submit",
                            "siteKey": "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        }}

                    />

                    <ButtonP text="Submit Trigger" onClick={() => setSubmitTrigger(!submitTrigger)} />

                </Col>
            </Row>
            {/* Form Delete */}
            <Row>
                <Col>

                    <FormDelete

                        curUri="api/form-delete"
                        curObj={["PUT", { id: 1 }]}
                        onSuccess={(res) => {

                            return res.data.mes
                        }}
                        onError={(err) => {
                            console.log(err.response)
                            return err.response.data
                        }}
                        recpthaSetting={{
                            "action": "Submit",
                            "siteKey": "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        }}



                    />
                </Col>
            </Row>
            {/* Section Panel */}


        </Container>



    )
}

export default submitForm
