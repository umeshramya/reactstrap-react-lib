import React from 'react'
import { Alert } from 'reactstrap';

interface Props{
    text:string;
    color?:string
}

export default function AlertForm(props: Props) {
  return (
    <Alert color={props.color} style={{ margin: "10px" }}>
    {props.text}
  </Alert>
  )
}