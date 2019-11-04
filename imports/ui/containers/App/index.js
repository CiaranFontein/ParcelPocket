import React, { Component } from "react";
import AccountsUIWrapper from "../../components/AccountsWrapper";
import { withTracker } from "meteor/react-meteor-data";
import RegisterPage from "../../pages/RegisterPage";
import AccountLogin from "../../pages/AccountLogin";
// import Container from "@material-ui/core/Container";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../routes";
<<<<<<< HEAD
import OthersOrdersListItem from "../../components/OthersOrdersListItem";
=======
import Recipient from "../../pages/Recipients";
import MenuBar from "../../components/MenuBar";
>>>>>>> 3e73ce27e93dc81533ecf2b2d7dde542f2315746

class _App extends Component {
  constructor() {
    super();

    this.state = {};
  }

<<<<<<< HEAD
   render() {
      return (
         <OthersOrdersListItem />
         // {<Router>
         //    <Routes />
         // </Router>}
      );
   }
=======
  render() {
    return (
      <Router>
<<<<<<< HEAD
=======
        <Recipient />
>>>>>>> 84138577a932a7b55228feb9a1f712b559e0e021
        <Routes />
      </Router>
    );
  }
>>>>>>> 3e73ce27e93dc81533ecf2b2d7dde542f2315746
}

export default App = withTracker(() => {
  return {
    // todos: ToDos.find({}).fetch(),
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId()
  };
})(_App);
