import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../routes";

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
      currentUser: Meteor.user(),
      currentUserId: Meteor.userId()
   };
})(_App);
