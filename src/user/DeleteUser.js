import React, { Component } from "react";

class DeleteUser extends Component {
  deleteAccount = () => {};

  deleteConfirmed = () => {
    let answer = window.confirm(
      "Are you sure you want to delete your profile?"
    );
    if (answer) {
      this.deleteAccount();
    }
  };

  render() {
    return (
      <div>
        <button
          onClick={this.deleteConfirmed}
          className="btn btn-raised btn-danger"
        >
          Delete Profile
        </button>
      </div>
    );
  }
}

export default DeleteUser;
