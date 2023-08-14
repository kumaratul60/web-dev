import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "xyx",
      },
    };
    console.log(this.props.name + "child constructor");
  }

  // Mounting -> showing on to the UI
  // Unmounting -> removing/disabling from the UI

  async componentDidMount() {
    console.log(this.props.name + "child mount");
    //  API Call

    const data = await fetch("https://api.github.com/users/kumaratul60");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log({ json });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.userInfo.name !== prevState.userInfo.name) {
      console.log(this.props.name + "child update");
    }

    this.timer = setInterval(() => {
      console.log("OP test");
    }, 1000);
    console.log(this.props.name + "child update2");
  }

  // unmount will call when go to another page
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log(this.props.name + "child unmount");
  }

  render() {
    const { name, location, twitter_username, avatar_url, bio, blog } =
      this.state.userInfo;

    console.log(this.props.name + " child render");
    // debugger;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="" />
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h3>bio:{bio}</h3>
        <a href={blog} target="_blank">
          Blog
        </a>

        <h4>Contact:{twitter_username}</h4>
      </div>
    );
  }
}

export default UserClass;
