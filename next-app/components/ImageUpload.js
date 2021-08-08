import React from 'react'
import { ImageUpload } from "reactstrap-react-lib"

export default function FormUploadCompent() {
    return (
        <ImageUpload
            uri="/api/image-upload"
            fileName="image"
        />
    )
}
