import React, { Component } from "react";
import AccountsUIWrapper from "../../components/AccountsWrapper";
import { withTracker } from "meteor/react-meteor-data";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../routes";
import Recipient from "../../pages/Recipients";

class _App extends Component {
   constructor() {
      super();

      this.state = {};
   }

   render() {
      return (
         <Router>
            <Routes />
         </Router>
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
