import React from 'react'
import { ImageUpload } from "reactstrap-react-lib"

export default function FormUploadCompent() {
    return (
        <ImageUpload
            uri="/api/image-upload"
            fileName="image"
            onSuccess= {(res)=>{
                return res.data.mes
            }}

            onError={(err)=>{
               console.log( err.response.data)
               return err.response.data
            }}
        />
    )
}
