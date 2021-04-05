import axios, { AxiosError, AxiosResponse } from 'axios'
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
    /**
     * This function is call back on success from server HTTP response 
     * @res This on success response from server
     */
    onSuccess?: (res:AxiosResponse, ...args:any)=>any
    /**
     * This function is call back on error from server HTTP response 
     * @error error eecived from server
     */
    onError?: (error:AxiosError, ...args:any)=>any
}

const  FormSubmit = ({curObj,curUri,Inputs, reset, onSuccess, onError}:Props)=> {
    const butRef            = useRef<ButtonP>(null)
    const modRef            = useRef<ModelP>(null)
    const alerRef           = useRef<AlertP>(null)


  
       const  submitHandle =  async(curUri:string, curObj:{}, onSuccess:any, onError:any)=>{
            try {
                modRef.current?.close();
                butRef.current?.showSpin();
                alerRef.current?.alertLight();
                
                let res = await axios.post(curUri, curObj).then(res=>res);
    
    
                butRef.current?.hideSpin();
                alerRef.current?.alertSuccess(res.data.mes);

                
                onSuccess(res, )
                
            } catch (error) {
                butRef.current?.hideSpin();
                alerRef.current?.alertError(error);
                onError(error, );
    
                
            }
        }



    return (
        <Container>
            <Row>
                <Col>
                <ModelP 
                    ref = {modRef}
                    Ok ={(e)=>{
                        submitHandle(curUri, curObj, onSuccess, onError)
                        modRef.current?.close();
                    }}
                />
                <Form onSubmit={(e)=>{
                    e.preventDefault()
                    modRef.current?.show();
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
