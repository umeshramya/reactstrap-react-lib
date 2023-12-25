import axios, { AxiosError, AxiosResponse } from "axios";
import React, {
  useRef,
  useEffect,
  ReactFragment,
  useState,
  useCallback,
} from "react";
import { Container, Row, Col, Form } from "reactstrap";
import { useRouter } from "next/router";
import ButtonP from "../units/ButtonP";
import AlertForm from "./AlertForm";
import ModelP from "../units/ModelP";
import { propMaster, recpthaSetting } from "../Interfaces/interfaces";
import queryString from "querystring";

interface Props extends propMaster {
  /**This is Form input elements. do not add Form elemet thise get rendered inside the form itself */
  Inputs: any;
  showResetButton: boolean;
  recpthaSetting?: recpthaSetting;
  disableOnSubmit?:boolean
}

const FormSubmit = ({
  curObj,
  curUri,
  Inputs,
  reset = () => {},
  onSuccess,
  onError,
  successCallBack,
  errorCallback,
  recpthaSetting,
  validation = () => "",
  AxiosRequestConfig = {},
  triggerSubmit,
  triggerReset,
  showResetButton = false,
  disableOnSubmit
}: Props) => {
  const butRef = useRef<ButtonP>(null);
  const modRef = useRef<ModelP>(null);
  const [triggerSubmitCount, setTriggerSubmitCount] = useState(0);
  const [triggerResetCount, setTriggerResetCount] = useState(0);
  const [submitDisable, setSubmitDisable] = useState(false);
  const [recaptchaToken, setrecaptchaToken] = useState("Unset reCaptcha Token");
  const [alertState, setAlertState] = useState<{text:string; color:string}>({"color" : "light", "text" : ""})

  const router = useRouter();

  useEffect(() => {
    setAlertState({"text" : "" , "color" : "light"})
    return () => {};
  }, [curObj]);

  useEffect(() => {
    if (triggerSubmitCount > 0) {
      submitHandle(curUri, curObj, onSuccess, onError, validation);
    }
    setTriggerSubmitCount(triggerSubmitCount + 1);
    return () => {};
  }, [triggerSubmit]);

  useEffect(() => {
    if (triggerResetCount > 0) {
      reset();
    }

    setTriggerResetCount(triggerResetCount + 1);
    return () => {};
  }, [triggerReset]);

  const submitHandle = async (
    _curUri: string,
    _curObj: typeof curObj,
    _onSuccess: typeof onSuccess,
    _onError: typeof onError,
    _validation: typeof validation
  ) => {
    let validationErrorMessage: string = "";

    try {
      modRef.current?.close();
      butRef.current?.showSpin();
      setSubmitDisable(true);
      setAlertState({"text" : "" , "color" : "light"})

      validationErrorMessage = _validation();
      if (validationErrorMessage !== "") {
        setAlertState({"text" : validationErrorMessage , "color" : "danger"})

        butRef.current?.hideSpin();
        setSubmitDisable(false);
        return;
      }

      if (_curObj[1] && recaptchaToken !== "Unset reCaptcha Token") {
        //@ts-ignore
        _curObj[1].recaptchaToken = recaptchaToken;
      }

      let res: AxiosResponse;
      if (_curObj[0] === "GET") {
        res = await axios.get(_curUri, AxiosRequestConfig).then((res) => res);
      } else if (_curObj[0] === "DELETE") {
        res = await axios
          .delete(_curUri, AxiosRequestConfig)
          .then((res) => res);
      } else if (_curObj[0] === "PUT") {
        res = await axios
          .put(_curUri, _curObj[1], AxiosRequestConfig)
          .then((res) => res);
      } else if (curObj[0] === "ACTION") {
        // code to use router to push the page said
        router.push(`${_curUri}/?${queryString.stringify(_curObj[1])}`);
        butRef.current?.hideSpin();
        setSubmitDisable(false);
        setAlertState({"text" : "Successfully completed action", color : "success"})
        return;
      } else {
        // default method POST
        res = await axios
          .post(_curUri, _curObj[1], AxiosRequestConfig)
          .then((res) => res);
      }

      let _successMessage = _onSuccess(res, successCallBack);

      butRef.current?.hideSpin();
      if(disableOnSubmit){
        setSubmitDisable(true);
      }else{
        setSubmitDisable(false);
      }
      
      setAlertState({"text" : _successMessage, color : "success"})
    } catch (error) {
      let _errorMessage = _onError(error as AxiosError, errorCallback);

      setAlertState({"text" : _errorMessage, color : "danger"})

      butRef.current?.hideSpin();
      setSubmitDisable(false);

      
    }
  };

  return (
    <>
      <Row>
        <Col>
          <ModelP
            ref={modRef}
            Ok={(e) => {
              submitHandle(curUri, curObj, onSuccess, onError, validation);
              modRef.current?.close();
            }}
            modelText="Press Ok to Submit data to server, Press cancel to exit"
            modelTitle="Do you want to submit Data ?"
          />
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              if (recpthaSetting) {
                //@ts-ignore
                let grecaptcha = window.grecaptcha;
                grecaptcha.ready(function () {
                  grecaptcha
                    .execute(recpthaSetting.siteKey, {
                      action: recpthaSetting.action,
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
            <Row>
              <Col>
                {/* Form elements go here */}
                {Inputs}
              </Col>
            </Row>
            <Row>
              <Col>
                <ButtonP text="Submit" ref={butRef} disabled={submitDisable} />
              </Col>
              {showResetButton ? (
                <Col>
                  <ButtonP
                    text={"Reset"}
                    color={"warning"}
                    onClick={reset}
                    disabled={false}
                  />
                </Col>
              ) : (
                ""
              )}
            </Row>
          </Form>
              <AlertForm text={alertState.text} color={alertState.color}/>
        </Col>
      </Row>
    </>
  );
};

export default FormSubmit;
