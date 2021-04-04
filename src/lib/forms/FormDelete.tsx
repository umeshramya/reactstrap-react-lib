import axios from 'axios'
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
}

function Delete({uri, id}:Props) {
    const butRef            = useRef<any>()
    const modRef            = useRef<any>()
    const alerRef           = useRef<any>()

    const submitHandle = async():Promise<void>=>{
        try {
            modRef.current.close();
            butRef.current.showSpin();
            alerRef.current.alertLight();

            let curObj = {
                id : id,
            }

            let res = await axios.post(uri, curObj).then(res=>res);


            butRef.current.hideSpin();
            alerRef.current.alertSuccess(res.data.mes);

            
        } catch (error) {
            console.log(error)
            butRef.current.hideSpin();
            alerRef.current.alertError(error);
        }
    }

    return (
        <>
            <Row>
                <Col>
                    <ModelP 
                        ref = {modRef}
                        Ok ={(e)=>{
                            submitHandle()
                            modRef.current.close();
                        }}
                    />
                    <Form onSubmit={(e)=>{
                        e.preventDefault()
                        modRef.current.show();
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
