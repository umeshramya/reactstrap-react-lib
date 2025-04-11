import React, { ReactElement, useState, useRef } from "react";
import { Form, FormGroup, Input, Label, Row, Col } from "reactstrap";
import axios, { AxiosError, AxiosResponse } from "axios";
import AlertP from "../units/AlertP";
import ModelP from "../units/ModelP";
import ButtonP from "../units/ButtonP";
import { recpthaSetting } from "../Interfaces/interfaces";

interface Props {
  fileName: string;
  uri: string;
  inputs?: HTMLInputElement | any;
  inputsData?: {};
  recpthaSetting?: recpthaSetting;
  fileSizeinKB?: number;
  onSuccess: (res: AxiosResponse) => string;
  onError: (err: AxiosError) => any;
  fileInputCount:number;
  validation : () => Promise<string>
}

export default function FormUpload(props: Props): ReactElement {
  const [previewSource, setPreviewSource] = useState<any[]>(() => new Array(props.fileInputCount).fill([]).map(el => ""));
  const [UploadButtonDisable, setUploadButtonDisable] = useState(false);
  const [recaptchaToken, setrecaptchaToken] = useState("Unset reCaptcha Token");
  const butRef = useRef<ButtonP>(null);
  const modRef = useRef<ModelP>(null);
  const alerRef = useRef<AlertP>(null);

  const onChangeHandler = async (e: any, index: number) => {
    try {
      alerRef.current?.alertLight();
      const curFile = e.target.files[0];

      // Check if the file is a PDF
      if (curFile.type !== "application/pdf") {
        throw new Error(`Only PDF files are allowed.`);
      }

      const size = props.fileSizeinKB ? props.fileSizeinKB * 1024 : 20 * 1024;

      if (curFile.size > size) {
        throw new Error(`File size cannot be more than ${size} bytes`);
      }

      const fileReader = new FileReader();
      fileReader.readAsDataURL(curFile);
      fileReader.onloadend = () => {
        const copyPreviewresource: any[] = Object.assign([], previewSource);
        copyPreviewresource[index] = fileReader.result;
        setPreviewSource(copyPreviewresource);
      };
    } catch (error:any) {
      alerRef.current?.alertError(error.message);
    }
  };

  const submitHandler = async () => {
    try {
      modRef.current?.close();
      setUploadButtonDisable(true);
      butRef.current?.showSpin();
      alerRef.current?.alertLight();


     const validationErrorMessage = await props.validation() ;
      if (validationErrorMessage !== "") {
        alerRef.current?.alertError(validationErrorMessage);

        butRef.current?.hideSpin();
        setUploadButtonDisable(false);
        return;
      }

      if (previewSource) {
        let data;
        if (recaptchaToken !== "Unset reCaptcha Token") {
          data = {
            data: previewSource,
            inputs: props.inputsData ? props.inputsData : {},
            recaptchaToken: recaptchaToken,
          };
        } else {
          data = {
            data: previewSource,
            inputs: props.inputsData ? props.inputsData : {},
          };
        }
        const res = await axios.post(props.uri, data);
        alerRef.current?.alertSuccess(props.onSuccess(res));
      }
    } catch (error) {
      console.log(error);
      alerRef.current?.alertError(props.onError(error as AxiosError));
    } finally {
      setUploadButtonDisable(false);
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
              if (props.recpthaSetting) {
                // @ts-ignore
                let grecaptcha = window.grecaptcha;
                grecaptcha.ready(function () {
                  grecaptcha
                    .execute(props.recpthaSetting?.siteKey, {
                      action: props.recpthaSetting?.action,
                    })
                    .then(function (token: any) {
                      setrecaptchaToken(token);
                      modRef.current?.show();
                    });
                });
              } else {
                modRef.current?.show();
              }
            }}
          >
            {props.inputs}
            <Row>
            {previewSource.map((el, i) => (
            <Col sm={12} md={12} lg={3} key={i}>
              <FormGroup >
                    <Label>Choose PDF</Label>
                    <Input
                      type="file"
                      accept=".pdf" // Only accept PDF files
                      multiple={false}
                      onChange={(e) => onChangeHandler(e, i)}
                    />
              </FormGroup>
              </Col>

            ))}
          </Row>

            <FormGroup>
              <ButtonP
                disabled={UploadButtonDisable}
                text="Upload"
                ref={butRef}
              />
            </FormGroup>
            <AlertP ref={alerRef} />
          </Form>
        </Col>
      </Row>
    </>
  );
}
