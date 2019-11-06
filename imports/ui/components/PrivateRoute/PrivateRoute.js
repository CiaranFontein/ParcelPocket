import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  currentUserId,
  component: Component,
  location,
  ...rest
}) => {
  return (
    <Route
      render={props => {
        if (currentUserId) {
          return <Component {...props} />;
        }
        return (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        );
      }}
      {...rest}
    />
  );
};

export default PrivateRoute;
