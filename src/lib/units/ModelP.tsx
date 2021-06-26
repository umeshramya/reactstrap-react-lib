import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

interface Props {
  /**
   * e is event
   */
  Ok: (e: any) => void;
  /**
   * text to bedisplayes in body of modal
   */
  modelText: string;
  /**
   * title of model
   */
  modelTitle: string;
}

interface State {
  modal: boolean;
  text: string;
  title: string;
}

export default class ModelP extends Component<Props, State> {
  state = {
    modal: false,
    text: "",
    title: "",
  };

  /**This function toggels the the show hide of Modal */
  toggle = () => this.setState({ ...this.state, modal: !this.state.modal });

  /**
   * This Shows the modal
   * @param curText Text to be displayed in body of Modal
   * @param curTitle Title of The modal
   */
  show = (
    curText = this.props.modelText,
    curTitle = this.props.modelTitle
  ): void => {
    this.setState({
      ...this.state,
      modal: true,
      text: curText,
      title: curTitle,
    });
  };
  /**
   *
   * @returns Closes the modal
   */
  close = (): boolean => {
    this.setState({
      ...this.state,
      modal: false,
    });
    return false;
  };

  render() {
    return (
      <Modal isOpen={this.state.modal}>
        <ModalHeader toggle={this.toggle}>{this.state.title}</ModalHeader>
        <ModalBody>{this.state.text}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.props.Ok}>
            OK
          </Button>{" "}
          <Button color="secondary" onClick={this.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

// import React, { useState, useImperativeHandle } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// interface Props{
//     Ok:()=>void;
// }

// const ModalExample = React.forwardRef(({Ok}:Props, ref) => {

//   const [modal, setModal] = useState(false);
//   const [text, setText] = useState("")
//   const [title, setTitle] = useState("")

//   const toggle = () => setModal(!modal);

//   useImperativeHandle(ref, ()=>({
//     toggle : () => setModal(!modal),
//     show : (curText="Do you want Submit this data", curTitle="Data Submission")=>{
//       setModal(true)
//       setText(curText)
//       setTitle(curTitle)
//     },
//     close : ()=>{
//       setModal(false)
//       return false
//     }
//   }))

//   return (
//     <div>
//         <Modal isOpen={modal}>
//             <ModalHeader toggle={toggle}>{title}</ModalHeader>
//             <ModalBody>{text}</ModalBody>
//             <ModalFooter>
//             <Button color="primary" onClick={Ok}>OK</Button>{' '}
//             <Button color="secondary" onClick={toggle}>Cancel</Button>
//         </ModalFooter>

//         </Modal>
//     </div>
//   );
// })

// export default ModalExample;
