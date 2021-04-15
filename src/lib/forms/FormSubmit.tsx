import axios, { AxiosResponse } from 'axios'
import React, {useRef, useEffect, ReactFragment} from 'react'
import {Container, Row, Col, Form } from "reactstrap"
import ButtonP from "../ButtonP"
import AlertP from "../AlertP"
import ModelP from "../ModelP"
import {propMaster} from "../Interfaces/interfaces"



interface Props extends propMaster{
/**This is Form input elements. do not add Form elemet thise get rendered inside the form itself */
  Inputs:ReactFragment
}

const  FormSubmit = ({curObj,curUri,Inputs, reset=()=>{} , onSuccess, onError, successCallBack, errorCallback, validation=()=>"", AxiosRequestConfig={}}:Props)=> {
    const butRef            = useRef<ButtonP>(null)
    const modRef            = useRef<ModelP>(null)
    const alerRef           = useRef<AlertP>(null)


    useEffect(() => {
        alerRef.current?.alertLight();
        return () => {
        
        }
    }, [curObj])


  
       const  submitHandle =  async(_curUri:string, _curObj:typeof curObj, _onSuccess:typeof onSuccess, _onError:typeof onError, _validation:typeof validation)=>{
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

                
                let res:AxiosResponse;
                 if( _curObj[0] === "GET"){
                    res = await axios.get(_curUri, AxiosRequestConfig).then(res=>res)
                }else if(_curObj[0] === "DELETE"){
                    res = await axios.delete(_curUri, AxiosRequestConfig).then(res=>res);
                }else if(_curObj[0] === "PUT"){
                    res= await axios.put(_curUri, _curObj[1], AxiosRequestConfig).then(res=>res);
                }else{
                    // default method POST
                    res = await axios.post(_curUri, _curObj[1], AxiosRequestConfig).then(res=>res);
                }
                


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

