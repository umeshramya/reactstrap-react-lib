import axios, { AxiosError, AxiosResponse } from "axios";
import React, { useRef, useEffect, useState } from "react";
import { Row, Col, Form } from "reactstrap";
import ButtonP from "../units/ButtonP";
import AlertP from "../units/AlertP";
import ModelP from "../units/ModelP";
import { propMaster, recpthaSetting } from "../Interfaces/interfaces";

type propsMasterwithoutReset = Omit<propMaster, "reset">;

interface Props extends propsMasterwithoutReset {
  recpthaSetting: recpthaSetting;
  buttonText?:string
}

function Delete(props: Props) {
  const butRef = useRef<ButtonP>(null);
  const modRef = useRef<ModelP>(null);
  const alerRef = useRef<AlertP>(null);
  const [recaptchaToken, setrecaptchaToken] = useState("Unset reCaptcha Token");
  useEffect(() => {
    alerRef.current?.alertLight();
    return () => {};
  }, [props.curObj]);

  const submitHandle = async (
    _curUri: string,
    _curObj: typeof props.curObj,
    _onSuccess: typeof props.onSuccess,
    _onError: typeof props.onError,
    _validation: typeof props.validation = () => ""
  ) => {
    let validationErrorMessage: string = "";

    try {
      modRef.current?.close();
      butRef.current?.showSpin();
      alerRef.current?.alertLight();

      validationErrorMessage = _validation();
      if (validationErrorMessage !== "") {
        alerRef.current?.alertError(validationErrorMessage);
        butRef.current?.hideSpin();
        return;
      }
      ``;

      if (_curObj[1] && recaptchaToken !== "Unset reCaptcha Token") {
        //@ts-ignore
        _curObj[1].recaptchaToken = recaptchaToken;
      }

      let res: AxiosResponse;
      if (_curObj[0] === "GET") {
        res = await axios
          .get(_curUri, props.AxiosRequestConfig)
          .then((res) => res);
      } else if (_curObj[0] === "DELETE") {
        res = await axios
          .delete(_curUri, props.AxiosRequestConfig)
          .then((res) => res);
      } else if (_curObj[0] === "PUT") {
        res = await axios
          .put(_curUri, _curObj[1], props.AxiosRequestConfig)
          .then((res) => res);
      } else {
        // default method
        res = await axios
          .post(_curUri, _curObj[1], props.AxiosRequestConfig)
          .then((res) => res);
      }

      let _successMessage = _onSuccess(res, props.successCallBack);

      butRef.current?.hideSpin();
      alerRef.current?.alertSuccess(_successMessage);
    } catch (error) {
      let _errorMessage = _onError(error as AxiosError, props.errorCallback);

      alerRef.current?.alertError(_errorMessage);
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
              submitHandle(
                props.curUri,
                props.curObj,
                props.onSuccess,
                props.onError,
                props.validation
              );
              modRef.current?.close();
            }}
            modelTitle="Do you want to delete data ?"
            modelText="Press Ok to delete data from server, Press cancel to exit"
          />
          <Form
            onSubmit={(e) => {
              e.preventDefault();

              if (props.recpthaSetting) {
                //@ts-ignore
                let grecaptcha = window.grecaptcha;
                grecaptcha.ready(function () {
                  grecaptcha
                    .execute(props.recpthaSetting.siteKey, {
                      action: props.recpthaSetting.action,
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
            <ButtonP
              text={props.buttonText ? props.buttonText : "Delete1" }
              color="danger"
              ref={butRef}
              disabled={false}
            />
          </Form>
          <AlertP ref={alerRef} />
        </Col>
      </Row>
    </>
  );
}

export default Delete;
