import React, { Component } from "react";
import User from "../User/User";
import UserClass from "../User/UserClass";

// const About = () => {
//   return (
//     <>
//       <h2>About</h2>
//       {/* <User /> */}
//       {/* <User name = {"Atul bhai"}/> */}
//       <UserClass name = {"Atul bro!"} location = {"UP"}/>
//     </>
//   )
// }

// export default About

/***
-> how lifecycle  in cbc work ?
when component load first create instance of class then call constructor then render method,  if any cbc or functional component is present in render method then fist is complete the all execution of that component and after completing the render method execution it come back to component life cycle method (componentDidMount,and etc..) to execute this.

so in below example after crating the instance of class, first call the constructor then render method, because in render method a <UserClass/> component present which is a cbc, so it completes the all execution of the component (constructor,render,lifecycle method) then render the componentDidMount method of parent component.

*/

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor");
  }

  componentDidMount() {
    // console.log("Parent mount");
    // API call
  }

  render() {
    // console.log("Parent Render");
    return (
      <>
        <h2>About</h2>
        <User />
        {/* <UserClass name={"First bro!"} location={"UP"} /> */}
        {/* <UserClass name={"Second bro!"} location={"UK"} /> */}
      </>
    );
  }
}

export default About;

/***
Order of execution:

- Parent constructor
- Parent render

// render phase
  - First constructor
  - First render

  - Second constructor
  - Second render

  // commit phase
  <DOM Update - In Single Batch>
  - First componentDidMount()
  - Second componentDidMount()

- Parent ComponentDidMount()

*/
