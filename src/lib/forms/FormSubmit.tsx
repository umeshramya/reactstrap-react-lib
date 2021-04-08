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
    reset:()=>void;

    /**
     * This function is call back on success from server HTTP response 
     * @res This on success response from server
     */
    onSuccess: (res:AxiosResponse, successCallBack?:(...arg: any)=>any)=>string
    /**
     * This is props as callback  function to passesed inside onSuccess function
     */
    successCallBack?:(...arg: any)=>any


    /**
     * This function is call back on error from server HTTP response 
     * @error error eecived from server
     */
    onError: (error:AxiosError, errorCallback?:(...arg:any)=>any)=>string
    /**
     * This is props as a callback  function to passesed inside onError function
     */
    errorCallback?:(...arg: any)=>any
    /**
     * This function is for validation before submitting  inthe front end itself
     * in case of failed validadtion return string 
     * If validation did succeed return ""
     */
    validation?:()=>string
    

}

const  FormSubmit = ({curObj,curUri,Inputs, reset, onSuccess, onError, successCallBack, errorCallback, validation=()=>""}:Props)=> {
    const butRef            = useRef<ButtonP>(null)
    const modRef            = useRef<ModelP>(null)
    const alerRef           = useRef<AlertP>(null)


  
       const  submitHandle =  async(_curUri:string, _curObj:{}, _onSuccess:typeof onSuccess, _onError:typeof onError, _validation:typeof validation)=>{
           let validationErrorMessage:string = "";

          
            try {
                modRef.current?.close();
                butRef.current?.showSpin();
                alerRef.current?.alertLight();

                validationErrorMessage =_validation();
                if(validationErrorMessage !== ""){
                    alerRef.current?.alertError(validationErrorMessage);
                    butRef.current?.hideSpin();
                    return;
                }

                
                let res = await axios.post(_curUri, _curObj).then(res=>res);
                let _successMessage =  _onSuccess(res, successCallBack)
                
                butRef.current?.hideSpin();
                alerRef.current?.alertSuccess(_successMessage);

                
                

            } catch (error) {
           
                let _errorMessage =  _onError(error, errorCallback);
               
                alerRef.current?.alertError(_errorMessage);
                butRef.current?.hideSpin();
                
                
    
                
            }
        }



    return (
        <Container>
            <Row>
                <Col>
                <ModelP 
                    ref = {modRef}
                    Ok ={(e)=>{
                        submitHandle(curUri, curObj, onSuccess, onError,validation)
                        modRef.current?.close();
                    }}
                    modelText="Press Ok to Submit data to server \n Press cancel to exit"
                    modelTitle = "Do you want to submit Data ?"
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

