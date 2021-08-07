import React, { ReactElement, useState, useRef } from "react";
import { Form, FormGroup, Input, Label, Row, Col } from "reactstrap";
import { ButtonP } from "../../index";
import axios, { AxiosError } from "axios";
import AlertP from "../units/AlertP";
import ModelP from "../units/ModelP";

interface Props {
  accept: string;
  // multiple: boolean | undefined;
  fileName: string;
  uri: string;
}

export default function FormUpload(props: Props): ReactElement {
  const [selectedFile, setSelectedFile] = useState(null);
  const butRef = useRef<ButtonP>(null);
  const modRef = useRef<ModelP>(null);
  const alerRef = useRef<AlertP>(null);

  const onChangeHandler = (e: any) => {
    setSelectedFile(e.target.files[0]);
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      modRef.current?.close();
      butRef.current?.showSpin();
      alerRef.current?.alertLight();

      const formData = new FormData();
      if (selectedFile != null) {
        formData.append("upload", selectedFile, props.fileName);
        let mes = await axios.post(props.uri, formData);
        butRef.current?.hideSpin();
        alerRef.current?.alertSuccess("Uploaded file");
      } else {
        throw (new Error().message = "File can not be null");
      }
    } catch (error) {
      alerRef.current?.alertError("Error Occured");
      butRef.current?.hideSpin();
    }
  };

  return (
    <>
      <Row>
        <Col>
          <ModelP
            ref={modRef}
            Ok={(e) => {
              modRef.current?.close();
            }}
            modelTitle="Do you want to Upload file ?"
            modelText="Press Ok to upload, Press cancel to exit"
          />
          <Form onSubmit={(e) => submitHandler(e)}>
            <FormGroup>
              <Label>Upload</Label>
              <Input
                type="file"
                accept={props.accept}
                multiple={false}
                onChange={(e) => {
                  modRef.current?.show();
                  onChangeHandler(e);
                }}
              />
            </FormGroup>

            <FormGroup>
              <ButtonP disabled={false} text="Upload" />
            </FormGroup>
            <AlertP ref={alerRef} />
          </Form>
        </Col>
      </Row>
    </>
  );
}
