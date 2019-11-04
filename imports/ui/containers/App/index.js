import React, { Component } from "react";
import AccountsUIWrapper from "../../components/AccountsWrapper";
import { withTracker } from "meteor/react-meteor-data";
import RegisterPage from "../../pages/RegisterPage";
import AccountLogin from "../../pages/AccountLogin";
// import Container from "@material-ui/core/Container";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../routes";
import YourOrdersListItem from "../../components/YourOrdersListItem";
import OthersOrdersListItem from "../../components/OthersOrdersListItem";
import Recipient from "../../pages/Recipients";
import MenuBar from "../../components/MenuBar";

class _App extends Component {
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
