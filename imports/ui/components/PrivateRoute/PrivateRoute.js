import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({
   currentUserId,
   component: Component,
   location,
   ...rest
}) => {
   return (
      <Route
         render={(props) => {
            if (currentUserId) {
               return <Component {...props} />;
            }
            return (
               <Redirect
                  to={{ pathname: "/login", state: { from: location } }}
               />
            );
         }}
         {...rest}
      />
   );
};

PrivateRoute.propTypes = {
   location: PropTypes.object,
   currentUserId: PropTypes.string.isRequired
};

export default PrivateRoute;
