import React, { Component } from "react";
// import ToDoInput from "../../components/ToDoInput";
import AccountsUIWrapper from "../../components/AccountsWrapper";
import { withTracker } from "meteor/react-meteor-data";
import { AccountLogin } from "../../pages/";

class _App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="login-wrapper">
        <AccountLogin />
      </div>
    );
  }
}

export default App = withTracker(() => {
  return {
    // todos: ToDos.find({}).fetch(),
    // currentUser: Meteor.user(),
    // currentUserId: Meteor.userId()
  };
})(_App);
