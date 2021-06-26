import React, { Component } from "react";
import { Button, Spinner } from "reactstrap";

interface Props {
  text: string;
  onClick?: () => void;
  color?: string;
  disabled: boolean;
}
interface State {
  toggelSpin: boolean;
}

export default class ButtonP extends Component<Props, State> {
  state = {
    toggelSpin: false,
  };

  /**This toggles the spinner of the button */
  spin = (): void =>
    this.setState({ ...this.state, toggelSpin: !this.state.toggelSpin });
  /**This shows the spinner of the button */
  showSpin = (): void => this.setState({ ...this.state, toggelSpin: true });
  /**This hides the spinner of the button */
  hideSpin = (): void => this.setState({ ...this.state, toggelSpin: false });

  render() {
    return (
      <Button
        block
        color={this.props.color}
        onClick={this.props.onClick}
        disabled={this.props.disabled}
      >
        {`${this.props.text}  `}
        {this.state.toggelSpin ? <Spinner /> : ""}
      </Button>
    );
  }
}
