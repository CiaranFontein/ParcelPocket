import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import Gravatar from "react-gravatar";
import Loading from "../Loading";
import PropTypes from "prop-types";

const Recipient = ({ classes, recipient, currentUserId, transitValue }) => {
   return recipient ? (
      <div className={classes.itemsContainer}>
         <div className={classes.leftContainer}>
            <div className={classes.nameAvatarContainer}>
               <div className={classes.userAvatar}>
                  <Gravatar email={recipient.email} />
               </div>
               <div className={classes.userName}>
                  {recipient.profile.firstName +
                     " " +
                     recipient.profile.lastName}
               </div>
            </div>
            <div className={classes.dateInfo}>
               <span></span>
            </div>
            <div className={classes.orderNumber}>
               Address:
               <span className={classes.orderIdAndDate}>
                  {" "}
                  {recipient.profile.address}{" "}
               </span>
            </div>
         </div>
         <div className={classes.rightContainer}>
            <div>
               Score:
               <span className={classes.orderStatus}>
                  {recipient.profile.score}
               </span>
            </div>
         </div>
      </div>
   ) : (
      <Loading />
   );
};

Recipient.propTypes = {
   classes: PropTypes.any.isRequired,
   currentUserId: PropTypes.string.isRequired,
   recipient: PropTypes.object.isRequired
};

export default withStyles(styles)(Recipient);
