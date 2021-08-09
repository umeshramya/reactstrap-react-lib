import React from 'react'
import { ImageUpload } from "reactstrap-react-lib"

export default function FormUploadCompent() {
    return (
        <ImageUpload
            uri="/api/image-upload"
            fileName="image"
            imageSizeinKB={35}
            onSuccess= {(res)=>{
                return res.data.mes
            }}

            onError={(err)=>{
               console.log( err.response.data)
               return err.response.data
            }}
            recpthaSetting={{
                "action": "Upload",
                "siteKey": "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            }}

        />
    )
}
