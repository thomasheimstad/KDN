import React, { Component } from "react";
import { Follow } from "react-twitter-widgets";

class Userinfo extends Component {
  render() {
    const { userTwitter } = this.props.config;
    const { expanded } = this.props;
    return (
      <Follow
        username={userTwitter}
        options={{ count: expanded ? true : "none" }}
      />
    );
  }
}

export default Userinfo;
