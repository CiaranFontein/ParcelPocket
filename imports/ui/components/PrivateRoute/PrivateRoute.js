import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ViewerContext } from "../../context/ViewerProvider";
import { withTracker } from "meteor/react-meteor-data";

const _PrivateRoute = ({
  currentUser,
  currentUserId,
  component: Component,
  location,
  ...rest
}) => {
  console.log(currentUser);
  return (
    <Route
      render={props => {
        if (viewer) {
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
