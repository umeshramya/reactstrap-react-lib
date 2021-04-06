import axios, {AxiosError, AxiosResponse} from 'axios'
import React, {useRef} from 'react'
import {Row, Col, Form} from "reactstrap"
import ButtonP from "../ButtonP"
import AlertP from "../AlertP"
import ModelP from "../ModelP"

interface Props{
    /**This API uri for deleteing Post request */
    uri:string;
    /**id is value by which the record has to be deleted  */
    id:any
    onSuccess?: (res:AxiosResponse, ...args:any)=>any
       /**This prop is message to be set on Suucess api call */
       successMessage?:string;
    /**
     * This function is call back on error from server HTTP response 
     * @error error eecived from server
     */
    onError?: (error:AxiosError, ...args:any)=>any
        /**This prop is message to be displayed on alert on  API call error */
        errorMessage?:string
}

function Delete({uri, id, onSuccess, onError, successMessage, errorMessage}:Props) {
    const butRef            = useRef<ButtonP>(null)
    const modRef            = useRef<ModelP>(null)
    const alerRef           = useRef<AlertP>(null)

    const submitHandle = async(onSuccess=(res:AxiosResponse)=>{}, onError=(res:AxiosError  )=>{}):Promise<void>=>{
        let _successMessage:string = "Successfully deleted the record";
        try {
            modRef.current?.close();
            butRef.current?.showSpin();
            alerRef.current?.alertLight();

            let curObj = {
                id : id,
            }

            let res = await axios.post(uri, curObj).then(res=>res);
            await onSuccess(res, )

                if(res.data.mes === undefined ){
                    if(successMessage !== undefined && successMessage !== ""){
                        _successMessage = successMessage;
                    }
                    
                }else{
                    _successMessage=res.data.mes;
                }
    
                
                butRef.current?.hideSpin();
                alerRef.current?.alertSuccess(_successMessage);

                
                
                
            } catch (error) {
                await onError(error, );
                if(errorMessage ===undefined){
                    alerRef.current?.alertError(errorMessage);
                }else{
                    alerRef.current?.alertError(error);
                }
                
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
                            submitHandle(onSuccess, onError)
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
