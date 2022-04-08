import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "This is my app",
    };
  }

  render() {
    return (
      <>
        <div>{this.state.message}</div>

        <button
          onClick={() => this.setState({ message: { text: "Hello World" } })}
        >
          Click here to change message!
        </button>
      </>
    );
  }
}

export default Test;
