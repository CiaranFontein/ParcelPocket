import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";

const _PrivateRoute = ({
  currentUser,
  currentUserId,
  component: Component,
  location,
  ...rest
}) => {
  return (
    <Route
      render={props => {
<<<<<<< HEAD
        if (props) {
=======
        if (currentUserId) {
>>>>>>> 294bd5060d2bec6e8e14dfc83fd77400a65537de
          return <Component {...props} />;
        }
        return <Redirect to={{ pathname: "/", state: { from: location } }} />;
      }}
      {...rest}
    />
  );
};

export default PrivateRoute = withTracker(() => {
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId()
  };
})(_PrivateRoute);
