import React,{useState} from 'react'
import { ImageUpload, PdfUpload } from "reactstrap-react-lib"
import {FormGroup, Input, Label,} from "reactstrap"

export default function FormUploadCompent() {
    const [inputObj, setInputObj] = useState({})
    return (
        <>

        <ImageUpload
            uri="/api/image-upload"
            fileName="image"
            imageSizeinKB={200}
            onSuccess= {(res)=>{
                return res.data.mes
            }}

            fileInputCount={8}

            onError={(err)=>{
               console.log( err.response.data)
               return err.response.data
            }}
            recpthaSetting={{
                "action": "Upload",
                "siteKey": "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            }}

            inputs = {
                <>
                    <FormGroup>
                        <Label>
                            <Input type="text" onChange={(e)=>setInputObj({...inputObj, name: e.target.value})} />
                        </Label>
                    </FormGroup>
                </>
            }
            inputsData={inputObj}

        />

        <PdfUpload
            uri="/api/image-upload"
            fileName="image"
            onSuccess= {(res)=>{
                return res.data.mes
            }}

            fileInputCount={2}
            fileSizeinKB={100000}

            onError={(err)=>{
               console.log( err.response.data)
               return err.response.data
            }}
            recpthaSetting={{
                "action": "Upload",
                "siteKey": "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            }}

            inputs = {
                <>
                    <FormGroup>
                        <Label>
                            <Input type="text" onChange={(e)=>setInputObj({...inputObj, name: e.target.value})} />
                        </Label>
                    </FormGroup>
                </>
            }
            inputsData={inputObj}

        />

    </>
    )
}
