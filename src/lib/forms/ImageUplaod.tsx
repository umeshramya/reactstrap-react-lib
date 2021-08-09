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
  recpthaSetting?: recpthaSetting;
  imageSizeinKB?: number;
  onSuccess: (res: AxiosResponse) => string;
  onError: (err: AxiosError) => string;
}
/**
 *
 *@props accept?: string;
 *@props fileName: string;
 *@props uri: string;
 *@props recpthaSetting?: recpthaSetting; google recaptcha setting
 *@props imageSizeinKB?: number; upperlimt size of image allowed
 *@props onSuccess: (res: AxiosResponse) => string;
 *@props onError: (err: AxiosError) => string;
 *@returns ReactElement
 */
export default function FormUpload(props: Props): ReactElement {
  const [previewSource, setPreviewSource] = useState<any>();
  const [UploadButtonDisable, setUploadButtonDisable] = useState(false);
  const [recaptchaToken, setrecaptchaToken] = useState("Unset reCaptcha Token");
  const butRef = useRef<ButtonP>(null);
  const modRef = useRef<ModelP>(null);
  const alerRef = useRef<AlertP>(null);

  const onChangeHandler = (e: any) => {
    try {
      alerRef.current?.alertLight();
      const curImage = e.target.files[0];
      let size = props.imageSizeinKB ? props.imageSizeinKB * 1024 : 20 * 1024;

      if (curImage.size > size) {
        throw (new Error().message = `Image size more ${size} bytes`);
      }
      const fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);
      fileReader.onloadend = () => {
        setPreviewSource(fileReader.result);
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
            recaptchaToken: recaptchaToken,
          };
        } else {
          data = {
            data: previewSource,
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
              <ButtonP
                disabled={UploadButtonDisable}
                text="Upload"
                ref={butRef}
              />
            </FormGroup>
            <AlertP ref={alerRef} />
          </Form>
          {previewSource && <img src={previewSource} height="100rem" />}
        </Col>
      </Row>
    </>
  );
}
