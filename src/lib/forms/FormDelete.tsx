import axios, { AxiosError, AxiosResponse } from "axios";
import React, { useRef, useEffect } from "react";
import { Row, Col, Form } from "reactstrap";
import ButtonP from "../units/ButtonP";
import AlertP from "../units/AlertP";
import ModelP from "../units/ModelP";
import { propMaster } from "../Interfaces/interfaces";

type Props = Omit<propMaster, "reset">;

// function Delete({curUri, curObj, onSuccess, onError, successCallBack, errorCallback,validation=()=>"" , AxiosRequestConfig={}}:Props) {
function Delete(props: Props) {
  const butRef = useRef<ButtonP>(null);
  const modRef = useRef<ModelP>(null);
  const alerRef = useRef<AlertP>(null);

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
            modelText="Press Ok to delete data from server \n Press cancel to exit"
          />
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              modRef.current?.show();
            }}
          >
            <ButtonP
              text="Delete"
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
