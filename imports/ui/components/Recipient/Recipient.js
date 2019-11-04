import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import Gravatar from "react-gravatar";

const Recipient = ({ classes, user }) => {
  console.log(user.profile);
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
    </div>
  );
};

export default withStyles(styles)(Recipient);
