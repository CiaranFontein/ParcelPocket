import React from "react";
import { withStyles, Button } from "@material-ui/core";
import styles from "./styles";
import Gravatar from "react-gravatar";
import { withTracker } from "meteor/react-meteor-data";

const Recipient = ({ classes, recipient, currentUserId, transitValue }) => {
  addOrder = () => {
    Meteor.call("orders.addOrder", currentUserId, user._id, transitValue);
  };
  return recipient ? (
    <div className={classes.recipientContainer}>
      <div className={classes.recipientAvatar}>
        {/* <Gravatar email={user.email} /> */}
      </div>
      <div className={classes.recipientName}>
        {recipient.profile.firstName} {recipient.profile.lastName}
      </div>
      <div className={classes.recipientAddress}>
        {recipient.profile.address}
      </div>
      <div className={classes.recipientScore}>{recipient.profile.score}</div>
      <Button onClick={addOrder}>Select This Recipient</Button>
    </div>
  ) : (
    ""
  );
};

export default withTracker(() => {
  Meteor.subscribe("users");
  return {
    currentUserId: Meteor.userId()
  };
})(withStyles(styles)(Recipient));
