import axios, {AxiosError, AxiosResponse, AxiosRequestConfig} from 'axios'
import React, {useRef} from 'react'
import {Row, Col, Form} from "reactstrap"
import ButtonP from "../ButtonP"
import AlertP from "../AlertP"
import ModelP from "../ModelP"
import {propMaster} from "../Interfaces/interfaces"

// interface Props{
//     /**This API uri for deleteing Post request */
//     curUri:string;
//     /**id is value by which the record has to be deleted  */
//     id:any
//      /**
//      * This function is call back on success from server HTTP response 
//      * @res This on success response from server
//      */
//       onSuccess: (res:AxiosResponse, successCallBack?:(...arg: any)=>any)=>string
//       /**
//        * This is props as callback  function to passesed inside onSuccess function
//        */
//       successCallBack?:(...arg: any)=>any
  
  
//       /**
//        * This function is call back on error from server HTTP response 
//        * @error error eecived from server
//        */
//       onError: (error:AxiosError, errorCallback?:(...arg:any)=>any)=>string
//       /**
//        * This is props as a callback  function to passesed inside onError function
//        */
//       errorCallback?:(...arg: any)=>any
//       /**
//      * This function is for validation before submitting  in the form
//      * In case of failed validadtion return string which is not equal to ""
//      * If validation did succeed then return ""
//      */
//     validation?:()=>string
//     /**
//      * THis is form submit method
//      * value could be "GET" | "POST" | "PUT" | "DELETE"
//      */
//     method?:RequestMethods

//     /**
//      * AxiosRequestConfig optional config to be passed in the api call
//      */
//     AxiosRequestConfig?:AxiosRequestConfig


// }

interface Props extends propMaster{
    /**id is value by which the record has to be deleted  */
    id:any
}

function Delete({curUri, curObj, onSuccess, onError, successCallBack, errorCallback,validation=()=>"" , AxiosRequestConfig={}}:Props) {
    const butRef            = useRef<ButtonP>(null)
    const modRef            = useRef<ModelP>(null)
    const alerRef           = useRef<AlertP>(null)

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
