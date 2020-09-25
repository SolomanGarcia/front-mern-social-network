import React, { Component } from "react";

class ProfileTabs extends Component {
  render() {
    const { following, followers } = this.props;
    return (
      <div>
        <div>
          Photo
          {JSON.stringify(following)}
        </div>
        <div>
          Name
          {JSON.stringify(followers)}
        </div>
      </div>
    );
  }
}

export default ProfileTabs;
