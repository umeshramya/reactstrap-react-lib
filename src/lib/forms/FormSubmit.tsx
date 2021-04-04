import axios from 'axios'
import React, {useRef, useState, useEffect,useImperativeHandle, ReactFragment} from 'react'
import {Container, Row, Col, Form, FormGroup, Label, Input, } from "reactstrap"
import ButtonP from "../ButtonP"
import AlertP from "../AlertP"
import ModelP from "../ModelP"
interface Props{
    /** req.body for post request */
    curObj:{};
    /**API rroute uri for post request */
    curUri:string;
    /**This is Form input elements. do not add Form elemet thise get rendered inside the form itself */
    Inputs:ReactFragment
    /** pass function with reseting the values i.e. curObj and etc */
    reset:()=>void
}

const  FormSubmit = ({curObj,curUri,Inputs, reset}:Props)=> {
    const butRef            = useRef<ButtonP>()
    const modRef            = useRef<ModelP>()
    const alerRef           = useRef<AlertP>()


  
       const  submitHandle =  async(curUri, curObj)=>{
            try {
                modRef.current.close();
                butRef.current.showSpin();
                alerRef.current.alertLight();
                
                let res = await axios.post(curUri, curObj).then(res=>res);
    
    
                butRef.current.hideSpin();
                alerRef.current.alertSuccess(res.data.mes);
    
                
            } catch (error) {
                butRef.current.hideSpin();
                alerRef.current.alertError(error);
            }
        }



    return (
        <Container>
            <Row>
                <Col>
                <ModelP 
                    ref = {modRef}
                    Ok ={(e)=>{
                        submitHandle(curUri, curObj)
                        modRef.current.close();
                    }}
                />
                <Form onSubmit={(e)=>{
                    e.preventDefault()
                    modRef.current.show();
                }}><Row>
                    <Col>
                    {/* Form elements go here */}
                    {Inputs}
                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ButtonP 
                            text = "Submit"
                            ref={butRef}
                        />
                    </Col>
                    <Col>
                        <ButtonP 
                            text={"Reset"}
                            color={"warning"}
                            onClick={reset}
                        />
                    </Col>
                </Row>
                    </Form>
                    <AlertP ref={alerRef}/>
                
                </Col>
            </Row>

        </Container>
    )
}

export default FormSubmit
