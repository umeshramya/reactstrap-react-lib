import React, { ReactElement, useState, useRef } from "react";
import { Form, FormGroup, Input, Label, Row, Col } from "reactstrap";
import imageCompression from 'browser-image-compression';
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
  imageSizeinKB?: number;
  onSuccess: (res: AxiosResponse) => string;
  onError: (err: AxiosError) => any;
  fileInputCount:number
}
/**
 *
 *@props accept?: string;
 *@props fileName: string;
 *@props uri: string;
 *@props inputs?: HTMLInputElement | any;
 *@props inputsData?: {};
 *@props recpthaSetting?: recpthaSetting; google recaptcha setting
 *@props imageSizeinKB?: number; upperlimt size of image allowed
 *@props onSuccess: (res: AxiosResponse) => string;
 *@props onError: (err: AxiosError) => string;
 *@returns ReactElement
 */
export default function FormUpload(props: Props): ReactElement {
  const [previewSource, setPreviewSource] = useState<any[]>(()=>{
    return new Array(props.fileInputCount).fill([]).map(el=> "");
  });
  const [UploadButtonDisable, setUploadButtonDisable] = useState(false);
  const [recaptchaToken, setrecaptchaToken] = useState("Unset reCaptcha Token");
  const butRef = useRef<ButtonP>(null);
  const modRef = useRef<ModelP>(null);
  const alerRef = useRef<AlertP>(null);

  const onChangeHandler = async(e: any, index :number) => {
    try {
      alerRef.current?.alertLight();
      let curImage = e.target.files[0];


      let size = props.imageSizeinKB ? props.imageSizeinKB * 1024 : 20 * 1024;

      if (curImage.size > size) {
        const options = {
          maxSizeMB: (size/1024)/1024,
          maxWidthOrHeight: 1920*2
        }

        curImage = await imageCompression(curImage, options);

      }


      const fileReader = new FileReader();
      fileReader.readAsDataURL(curImage);
      fileReader.onloadend = () => {

        const copyPreviewresource:any[] = Object.assign([], previewSource)
        copyPreviewresource[index]= fileReader.result
        setPreviewSource(copyPreviewresource);
      };
    } catch (error) {
      alerRef.current?.alertError(error as string);
    }
  };

  const submitHandler = async () => {
    try {
      modRef.current?.close();
      setUploadButtonDisable(true);
      butRef.current?.showSpin();

      alerRef.current?.alertLight();

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
        let res = await axios.post(props.uri, data);
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
                //@ts-ignore
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

            {
              previewSource.map((el, i)=>{
                  return(
                    <FormGroup key={i}>
                      <Row >
                          <Col sm={12} md={12} lg={6}>
                            <Label>Choose Image</Label>
                            <Input
                              type="file"
                              accept={"image/*"}
                              multiple={false}
                              onChange={async(e) => {
                                await onChangeHandler(e, i);
                              }}
                            />
                          </Col>
                          <Col sm={12} md={12} lg={6}>
                            {previewSource && <img src={previewSource[i]} height="100rem" />}
                          </Col>
                      </Row>
                    </FormGroup>
                  )
              })

            }
          

            {props.inputs}
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
