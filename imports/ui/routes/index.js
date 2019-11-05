import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router";
import MenuBar from "../components/MenuBar";
import PrivateRoute from "../components/PrivateRoute";
import AccountLogin from "../pages/AccountLogin";
import RegisterPage from "../pages/RegisterPage";
import Recipients from "../pages/Recipients";
import YourOrders from "../pages/YourOrders";
import OthersOrders from "../pages/OthersOrders";
import OthersOrdersListItem from "../components/OthersOrdersListItem";
import YourOrdersListItem from "../components/YourOrdersListItem";
import Profile from "../pages/Profile";
import { withTracker } from "meteor/react-meteor-data";

const _Routes = ({ currentUserId }) => {
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
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/profile/:id" component={Profile} />
        <Redirect from="*" to="/yourorders" />
      </Switch>
    </Fragment>
  );
};

export default Routes = withTracker(() => {
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId()
  };
})(_Routes);
