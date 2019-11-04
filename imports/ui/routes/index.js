import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router";
import MenuBar from "../components/MenuBar";
import PrivateRoute from "../components/PrivateRoute";
import AccountLogin from "../pages/AccountLogin";
import RegisterPage from "../pages/RegisterPage";
import Recipients from "../pages/Recipients";
import YourOrders from "../pages/YourOrders";
import OthersOrders from "../pages/OthersOrders";
import Profile from "../pages/Profile";
import { withTracker } from "meteor/react-meteor-data";

const _Routes = ({ currentUserId }) => {
<<<<<<< HEAD
  {
    if (!currentUserId) {
      return (
        <Switch>
          <Route path="/login" component={AccountLogin} />
          <Route path="/register" component={RegisterPage} />
          <Redirect from="*" to="/login" />
        </Switch>
      );
    }
  }
  return (
    <Fragment>
      <MenuBar />
      <Switch>
        <PrivateRoute exact path="/recipients" component={Recipients} />
        <PrivateRoute exact path="/yourorders" component={YourOrders} />
        <PrivateRoute exact path="/othersorders" component={OthersOrders} />
        <PrivateRoute path="/profile/:id" component={Profile} />
        <PrivateRoute path="/profile" component={Profile} />
        <Redirect from="*" to="/yourorders" />
      </Switch>
    </Fragment>
  );
=======
   {
      if (!currentUserId) {
         return (
            <Switch>
               <Route path="/login" component={AccountLogin} />
               <Route path="/register" component={RegisterPage} />
               <Redirect from="*" to="/login" />
            </Switch>
         );
      }
   }
   return (
      <Fragment>
         <MenuBar />
         <Switch>
            <PrivateRoute exact path="/recipients" component={Recipients} />
            <PrivateRoute exact path="/yourorders" component={YourOrders} />
            <PrivateRoute exact path="/othersorders" component={OthersOrders} />
            <PrivateRoute exact path="/profile/:id" component={Profile} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <Redirect from="*" to="/yourorders" />
         </Switch>
      </Fragment>
   );
>>>>>>> 84138577a932a7b55228feb9a1f712b559e0e021
};

export default Routes = withTracker(() => {
   return {
      currentUser: Meteor.user(),
      currentUserId: Meteor.userId()
   };
})(_Routes);
