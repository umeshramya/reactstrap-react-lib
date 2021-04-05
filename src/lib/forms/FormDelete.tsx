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
    /**
     * This function is call back on error from server HTTP response 
     * @error error eecived from server
     */
    onError?: (error:AxiosError, ...args:any)=>any
}

function Delete({uri, id, onSuccess, onError}:Props) {
    const butRef            = useRef<ButtonP>(null)
    const modRef            = useRef<ModelP>(null)
    const alerRef           = useRef<AlertP>(null)

    const submitHandle = async(onSuccess:any, onError:any):Promise<void>=>{
        try {
            modRef.current?.close();
            butRef.current?.showSpin();
            alerRef.current?.alertLight();

            let curObj = {
                id : id,
            }

            let res = await axios.post(uri, curObj).then(res=>res);


            butRef.current?.hideSpin();
            alerRef.current?.alertSuccess(res.data.mes);

            onSuccess(res, )
            
        } catch (error) {

            butRef.current?.hideSpin();
            alerRef.current?.alertError(error);
            onError(error, )
        }
    }

    return (
        <>
            <Row>
                <Col>
                    <ModelP 
                        ref = {modRef}
                        Ok ={(e)=>{
                            submitHandle(onSuccess=(res:AxiosResponse)=>{}, onError=(res:AxiosError)=>{})
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
