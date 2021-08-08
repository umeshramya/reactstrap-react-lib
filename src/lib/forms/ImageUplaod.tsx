import React, { ReactElement, useState, useRef } from "react";
import { Form, FormGroup, Input, Label, Row, Col } from "reactstrap";

import axios, { AxiosError } from "axios";
import AlertP from "../units/AlertP";
import ModelP from "../units/ModelP";
import ButtonP from "../units/ButtonP"
interface Props {
  fileName: string;
  uri: string;
}
/**
 *
 *@props accept?: string;
 *@props fileName: string;
 *@props uri: string;
 *@returns ReactElement
 */
export default function FormUpload(props: Props): ReactElement {

  const [previewSource, setPreviewSource] = useState<any>();
  const [UploadButtonDisable, setUploadButtonDisable] = useState(false)
  const butRef = useRef<ButtonP>(null);
  const modRef = useRef<ModelP>(null);
  const alerRef = useRef<AlertP>(null);

  const onChangeHandler = (e: any) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onloadend = () => {
      setPreviewSource(fileReader.result);
    };
  };

  const submitHandler = async () => {
    try {
      modRef.current?.close();
      setUploadButtonDisable(true)
      butRef.current?.showSpin();

      alerRef.current?.alertLight();

      if (previewSource) {
        let res = await axios.post(props.uri, { data: previewSource });
      }


    } catch (error) {


    } finally {
      alerRef.current?.alertError("Error Occured");
      setUploadButtonDisable(false)
      butRef.current?.hideSpin();
    }
  };

  return (
    <>
      <Row>
        <Col>
          <ModelP
            ref={modRef}
            Ok={async () => {
              modRef.current?.close();
              await submitHandler();
            }}
            modelTitle="Do you want to Upload file ?"
            modelText="Press Ok to upload, Press cancel to exit"
          />
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              modRef.current?.show();
            }}
          >
            <FormGroup>
              <Label>Upload</Label>
              <Input
                type="file"
                accept={"image/*"}
                multiple={false}
                onChange={(e) => {
                  onChangeHandler(e);
                }}
              />
            </FormGroup>

            <FormGroup>
              <ButtonP disabled={UploadButtonDisable} text="Upload" ref={butRef} />
            </FormGroup>
            <AlertP ref={alerRef} />
          </Form>
          {previewSource && <img src={previewSource} height="100rem" />}
        </Col>
      </Row>
    </>
  );
}
