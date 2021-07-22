import React, { ReactElement } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { ButtonP } from "../../index";

interface Props {
  accept: string;
  multiple: boolean | undefined;
}

export default function FormUpload(props: Props): ReactElement {
  const submitHandler = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <Form onSubmit={(e) => submitHandler(e)}>
        <FormGroup>
          <Label>Upload</Label>
          <Input type="file" accept={props.accept} multiple={props.multiple} />
        </FormGroup>

        <FormGroup>
          <ButtonP disabled={false} text="Upload" />
        </FormGroup>
      </Form>
    </>
  );
}
