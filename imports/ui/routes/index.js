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
   {
      if (!currentUserId) {
         return (
            <Switch>
               <Route exact path="/login" component={AccountLogin} />
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
            <PrivateRoute
               exact
               path="/orders"
               component={YourOrders}
               currentUserId={currentUserId}
            />
            <PrivateRoute
               exact
               path="/recipients"
               component={Recipients}
               currentUserId={currentUserId}
            />
            <PrivateRoute
               exact
               path="/parcels"
               component={OthersOrders}
               currentUserId={currentUserId}
            />
            <PrivateRoute
               path="/profile"
               component={Profile}
               currentUserId={currentUserId}
            />
            <PrivateRoute
               path="/profile/:id"
               component={Profile}
               currentUserId={currentUserId}
            />
            <Redirect from="*" to="/recipients" />
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
