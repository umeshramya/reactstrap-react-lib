import axios, {AxiosResponse} from 'axios'
import React, {useRef, useEffect} from 'react'
import {Row, Col, Form} from "reactstrap"
import ButtonP from "../units/ButtonP"
import AlertP from "../units/AlertP"
import ModelP from "../units/ModelP"
import {propMaster} from "../Interfaces/interfaces"



interface Props extends propMaster{
    /**id is value by which the record has to be deleted  */
    id:any
}

function Delete({curUri, curObj, onSuccess, onError, successCallBack, errorCallback,validation=()=>"" , AxiosRequestConfig={}}:Props) {
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
``
                
                let res:AxiosResponse;
                 if( _curObj[0] === "GET"){
                    res = await axios.get(_curUri,AxiosRequestConfig).then(res=>res)
                }else if(_curObj[0] === "DELETE"){
                    res = await axios.delete(_curUri, AxiosRequestConfig).then(res=>res);
                }else if(_curObj[0] === "PUT"){
                    res= await axios.put(_curUri, _curObj, AxiosRequestConfig).then(res=>res);
                }else{
                    // default method
                    res = await axios.post(_curUri, _curObj, AxiosRequestConfig).then(res=>res);
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
        <>
            <Row>
                <Col>
                    <ModelP 
                        ref = {modRef}
                        Ok ={(e)=>{
                            submitHandle(curUri, curObj, onSuccess, onError,validation)
                            modRef.current?.close();
                        }}
                        modelTitle ="Do you want to delete data ?"
                        modelText = "Press Ok to delete data from server \n Press cancel to exit"
                    />
                    <Form onSubmit={(e)=>{
                        e.preventDefault()
                        modRef.current?.show();
                    }}>

                    <ButtonP 
                        text = "Delete"
                        color="danger"
                        ref={butRef}
                    />
                    </Form>
                    <AlertP ref={alerRef}/>
                </Col>
            </Row>
        </>
    )
}

export default Delete
