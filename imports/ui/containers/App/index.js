import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../routes";

class _App extends Component {
<<<<<<< HEAD
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
=======
   render() {
      return (
         <Router>
            <Routes />
         </Router>
      );
   }
>>>>>>> 294bd5060d2bec6e8e14dfc83fd77400a65537de
}

export default App = withTracker(() => {
   return {
      currentUser: Meteor.user(),
      currentUserId: Meteor.userId()
   };
})(_App);
