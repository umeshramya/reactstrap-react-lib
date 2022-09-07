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
import AlertP from "../units/AlertP";
import ModelP from "../units/ModelP";
import { propMaster, recpthaSetting } from "../Interfaces/interfaces";
import queryString from "querystring";

interface Props extends propMaster {
  /**This is Form input elements. do not add Form elemet thise get rendered inside the form itself */
  Inputs: ReactFragment;
  showResetButton: boolean;
  recpthaSetting?: recpthaSetting;
  buttonText:string
}

const FormClick = ({
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
  buttonText
}: Props) => {
  const butRef = useRef<ButtonP>(null);
  const modRef = useRef<ModelP>(null);
  const alerRef = useRef<AlertP>(null);
  const [triggerSubmitCount, setTriggerSubmitCount] = useState(0);
  const [triggerResetCount, setTriggerResetCount] = useState(0);
  const [clickDisable, setClickDisable] = useState(false);
  const [recaptchaToken, setrecaptchaToken] = useState("Unset reCaptcha Token");

  const router = useRouter();

  useEffect(() => {
    alerRef.current?.alertLight();
    return () => {};
  }, [curObj]);

  useEffect(() => {
    if (triggerSubmitCount > 0) {
      ClickHandle(curUri, curObj, onSuccess, onError, validation);
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

  const ClickHandle = async (
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
      setClickDisable(true);
      alerRef.current?.alertLight();

      validationErrorMessage = _validation();
      if (validationErrorMessage !== "") {
        alerRef.current?.alertError(validationErrorMessage);
        butRef.current?.hideSpin();
        setClickDisable(false);
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
        setClickDisable(false);
        alerRef.current?.alertSuccess("Successfully completed action");
        return;
      } else {
        // default method POST
        res = await axios
          .post(_curUri, _curObj[1], AxiosRequestConfig)
          .then((res) => res);
      }

      let _successMessage = _onSuccess(res, successCallBack);

      butRef.current?.hideSpin();
      setClickDisable(false);
      alerRef.current?.alertSuccess(_successMessage);
    } catch (error) {
      let _errorMessage = _onError(error as AxiosError, errorCallback);

      alerRef.current?.alertError(_errorMessage);
      butRef.current?.hideSpin();
      setClickDisable(false);
    }
  };

  return (
    <>
      <Row>
        <Col>
          <ModelP
            ref={modRef}
            Ok={(e) => {
              ClickHandle(curUri, curObj, onSuccess, onError, validation);
              modRef.current?.close();
            }}
            modelText="Press Ok to  continuer, Press cancel to exit"
            modelTitle="Do you want to do this action ?"
          />
          <Form

          >
            <Row>
              <Col>
                {/* Form elements go here */}
                {Inputs}
              </Col>
            </Row>
            <Row>
              <Col>
                <ButtonP text={buttonText || "Click"} ref={butRef} disabled={clickDisable}  
                color={"success"}
                onClick = {() => {
                  // e.preventDefault();
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
                }}/>
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
          <AlertP ref={alerRef} />
        </Col>
      </Row>
    </>
  );
};

export default FormClick;

