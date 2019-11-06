import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Gravatar from "react-gravatar";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import { Users } from "../../../api/users";

const YourOrdersListItem = ({ classes, order, currentUser, users }) => {
   // console.log(order);
   console.log(currentUser);
   console.log(users);

   const DateDelivered = new Date().toDateString();

   if (order.status === "Complete") {
      logDate = (
         <div>
            Delivered Date:
            <span className={classes.orderIdAndDate}>{DateDelivered}</span>
         </div>
      );
   } else {
      logDate = (
         <div>
            Expected Delivery Date:
            <span className={classes.orderIdAndDate}>{order.dateExpected}</span>
         </div>
      );
   }

   if (order.status !== "Completed") {
      logButton = (
         <React.Fragment>
            <button disabled className={classes.buttonOff}>
               <ThumbUpIcon />
            </button>
            <button disabled className={classes.buttonOff}>
               <ThumbDownIcon />
            </button>
         </React.Fragment>
      );
   } else {
      logButton = (
         <React.Fragment>
            <button className={classes.buttonOnUp}>
               <ThumbUpIcon />
            </button>
            <button className={classes.buttonOnDown}>
               <ThumbDownIcon />
            </button>
         </React.Fragment>
      );
   }
   // if (currentUser._id === ownerOrder._id) {
   return (
      <div className={classes.itemsContainer}>
         <div className={classes.leftContainer}>
            <div className={classes.nameAvatarContainer}>
               <div className={classes.userAvatar}>
                  <Gravatar
                     className={classes.userAvatarImg}
                     email={recipientOrder.emails.row[0].address}
                  />
               </div>
               <div className={classes.userName}>
                  {recipientOrder.profile.firstName +
                     " " +
                     recipientOrder.profile.lastName}
               </div>
            </div>
            <div className={classes.dateInfo}>
               <span></span>
               {logDate}
            </div>
            <div className={classes.orderNumber}>
               Order Number:
               <span className={classes.orderIdAndDate}>{order._id}</span>
            </div>
         </div>
         <div className={classes.rightContainer}>
            <div className={classes.orderIdAndDate}>
               {recipientOrder.address}
            </div>
            <div>
               Order Status:
               <span className={classes.orderStatus}>{order.status}</span>
            </div>
            <div>{logButton}</div>
         </div>
      </div>
   );
   // } else {
   //    <h1>You need to log in</h1>;
   // }
};

export default withTracker(() => {
   Meteor.subscribe("users");
   console.log(Users.find({}).fetch());
   return {
      currentUser: Meteor.user()
      // users: Meteor.users.find({}).fetch()
   };
})(withStyles(styles)(YourOrdersListItem));
