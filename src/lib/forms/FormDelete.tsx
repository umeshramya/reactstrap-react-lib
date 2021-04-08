import axios, {AxiosError, AxiosResponse} from 'axios'
import React, {useRef} from 'react'
import {Row, Col, Form} from "reactstrap"
import ButtonP from "../ButtonP"
import AlertP from "../AlertP"
import ModelP from "../ModelP"

interface Props{
    /**This API uri for deleteing Post request */
    curUri:string;
    /**id is value by which the record has to be deleted  */
    id:any
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

}

function Delete({curUri, id, onSuccess, onError, successCallBack, errorCallback}:Props) {
    const butRef            = useRef<ButtonP>(null)
    const modRef            = useRef<ModelP>(null)
    const alerRef           = useRef<AlertP>(null)

    const  submitHandle =  async(_curUri:string, _id:any, _onSuccess:typeof onSuccess, _onError:typeof onError)=>{

          
        try {
            modRef.current?.close();
            butRef.current?.showSpin();
            alerRef.current?.alertLight();
            
            let res = await axios.post(_curUri, {id: _id}).then(res=>res);
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
                            submitHandle(curUri, id, onSuccess, onError)
                            modRef.current?.close();
                        }}
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
