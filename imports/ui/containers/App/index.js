import React, { Component } from "react";
//import ToDoInput from "../../components/ToDoInput";
import AccountsUIWrapper from "../../components/AccountsWrapper";
import { withTracker } from "meteor/react-meteor-data";
import RegisterPage from "../../pages/RegisterPage";
import { BrowserRouter } from "react-router-dom";
import Routes from "../../routes";
// import Container from "@material-ui/core/Container";

class _App extends Component {
   constructor() {
      super();

      this.state = {};
   }

   render() {
      return (
         <BrowserRouter>
            <Routes />
         </BrowserRouter>
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
