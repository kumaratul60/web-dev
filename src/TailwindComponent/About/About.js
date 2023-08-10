import React, { Component } from "react";
import UserClass from "../User/UserClass";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <h2>About</h2>

        <UserClass name={"First bro!"} location={"UP"} />
      </>
    );
  }
}

export default About;
