import React from 'react'
import {FormUpload} from "reactstrap-react-lib"

export default function FormUploadCompent() {
    return (
        <FormUpload
            uri = "/api/form-upload"
            fileName = "image"
        />
    )
}
