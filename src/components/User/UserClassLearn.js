import React from "react";

//  functional component: It is a function which returns some peace of jsx.

//  Class based components: It is class which extends react.component and it has a render method that returns some peace of jsx.

// React.Component: It is class which given to us by React, and UserClass inheriting some property from it.

class UserClassLearn extends React.Component {
  // to receive props in cbc, create a constructor
  // can we avoid super(props): NO
  //  if you not write super(props) then it shows error: ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor

  //   loading a class based components on a web page so it means creating a instance of that class

  //   NOTE: when component mount/load then first constructor then render then lifeCycleMethod call

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };

    // console.log({ props });
    console.log(this.props.name + "child constructor");
  }

  /***
-> how lifecycle  in cbc work ?
when component load first create instance of class then call constructor then render method,  if any cbc or functional component is present in render method then fist is complete the all execution of that component and after completing the render method execution it come back to component life cycle method (componentDidMount,and etc..) to execute this.

so in below example after crating the instance of class, first call the constructor then render method, because in render method a <UserClass/> component present which is a cbc, so it completes the all execution of the component (constructor,render,lifecycle method) then render the componentDidMount method of parent component.

*/

  componentDidMount() {
    console.log(this.props.name + "child mount");
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    console.log(this.props.name + " child render");
    return (
      <div className="user-card">
        {/* <h2>Name:Atul</h2> */}
        {/* <h2>Name:{this.props.name}</h2> */}
        {/* <h3>Location:UttarPardesh</h3> */}
        {/* <h3>Location:{this.props.location}</h3> */}
        {/* <h2>Count: {this.state.count}</h2> */}
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            // Never Update State Variable Directly
            // this.state.count  = this.state.count + 1

            // also if you have multiple same functionality state so not do in this way

            // this.setState({
            //   count: this.state.count + 1,
            // });
            // this.setState({
            //   count2: this.state.count2 + 1,
            // });

            //  do in this way by batching both state into one
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Count2: {count2}</h2>
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact: @atulkawasthi</h4>
      </div>
    );
  }
}

export default UserClassLearn;
