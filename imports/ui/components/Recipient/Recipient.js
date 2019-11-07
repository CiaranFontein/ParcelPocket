import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import Gravatar from "react-gravatar";
import AddOrder from "../../components/AddOrder";

const Recipient = ({ classes, recipient, currentUserId, transitValue }) => {
  return recipient ? (
    <div className={classes.recipientContainer}>
      <div className={classes.recipientAvatar}>
        <Gravatar email={recipient.email} />
      </div>
      <div className={classes.recipientName}>
        {recipient.profile.firstName} {recipient.profile.lastName}
      </div>
      <div className={classes.recipientAddress}>
        {recipient.profile.address}
      </div>
      <div className={classes.recipientScore}>{recipient.profile.score}</div>
      <AddOrder
        currentUserId={currentUserId}
        recipient={recipient}
        transitValue={transitValue}
      />
    </div>
  ) : (
    ""
  );
};

export default withStyles(styles)(Recipient);
