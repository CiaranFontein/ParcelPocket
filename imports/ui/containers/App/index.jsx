import React, { Component } from "react";
import { Recipients } from "../../pages";
import AccountsUIWrapper from "../../components/AccountsWrapper";
import { withTracker } from "meteor/react-meteor-data";

class _App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="login-wrapper">
        <Recipients />
      </div>
    );
  }
}

export default App = withTracker(() => {
  return {
    // todos: ToDos.find({}).fetch(),
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId()
  };
})(_App);
