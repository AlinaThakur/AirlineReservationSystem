import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Click to Logout ..!",
      // display:"I am  being on the display because of state"
    };
  }

  logoutState() {
    //We can set my set to anything as new
    this.setState({
      message: "Hey, User you logged out.",
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="logout">
        <h1>{this.state.message}</h1>
       <button onClick={() => this.logoutState()}>Logout</button>
      </div>
    ); // I am creating a button if I click on -- the message has to change.
    //from one message to another message --- sate is been changed?
  }
}

export default Message;
