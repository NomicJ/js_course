import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
    };
  }

  toggleButton = () => {
    this.setState((prevState) => ({
      isShown: !prevState.isShown,
    }));
  };

  render() {
    const buttonText = this.state.isShown ? "Hide" : "Show";

    return <button onClick={this.toggleButton}>{buttonText}</button>;
  }
}

export default Button;
