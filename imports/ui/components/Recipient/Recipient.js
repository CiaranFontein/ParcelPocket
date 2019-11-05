import React from "react";
import { withStyles, Button } from "@material-ui/core";
import styles from "./styles";
import Gravatar from "react-gravatar";
import { withTracker } from "meteor/react-meteor-data";

const Recipient = ({ classes, user, currentUserId, transitValue }) => {
  addOrder = () => {
    Meteor.call("orders.addOrder", currentUserId, user._id, transitValue);
  };
  return (
    <div className={classes.recipientContainer}>
      <div className={classes.recipientAvatar}>
        <Gravatar email={user.email} />
      </div>
      <div className={classes.recipientName}>
        {user.profile.firstName} {user.profile.lastName}
      </div>
      <div className={classes.recipientAddress}>{user.profile.address}</div>
      <div className={classes.recipientScore}>{user.profile.score}</div>
      <Button onClick={addOrder}>Select This Recipient</Button>
    </div>
  );
};

export default withTracker(() => {
  Meteor.subscribe("users");
  return {
    currentUserId: Meteor.userId()
  };
})(withStyles(styles)(Recipient));
