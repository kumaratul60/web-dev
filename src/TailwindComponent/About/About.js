import React, { Component } from "react";
import UserClass from "../User/UserClass";
import UserContext from "../../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <h2>About</h2>
<div>
LoggedIn class user
  <UserContext.Consumer>
  {/* {(data)=>console.log({data})} */}
  {({loggedInUser})=><h1 className="text-xl font-bold">{loggedInUser}</h1>}

  </UserContext.Consumer>
</div>
        <UserClass name={"First bro!"} location={"UP"} />
      </>
    );
  }
}

export default About;
