import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Gravatar from "react-gravatar";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";

const YourOrdersListItem = ({ classes, order, currentUser, users }) => {
   let owner = null;
   let recipient = null;

   if (users.length > 1) {
      users.map((user) => {
         if (user._id === order.owner) {
            owner = user;
         }
         if (user._id === order.recipient) {
            recipient = user;
         }
      });
      // console.log("owner= " + owner.profile.firstName);
      // console.log("recipient= " + recipient.profile.firstName);
      // console.log("Current user= " + currentUser.profile.firstName);
   }

   const DateDelivered = new Date().toDateString();

   if (order.status === "Finished") {
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
            <span className={classes.orderIdAndDate}>
               {
                  order.maxDeliveryDays
                  //TODO fix this variable here!!!
               }
            </span>
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
            <button
               className={classes.buttonOnUp}
               onClick={() => {
                  Meteor.call(
                     "users.addRating",
                     order.recipient,
                     (err, res) => {
                        console.log(err, res);
                     }
                  );
                  Meteor.call(
                     "orders.changeStatusToFinished",
                     order,
                     (err, res) => {
                        console.log(err, res);
                     }
                  );
               }}
            >
               <ThumbUpIcon />
            </button>
            <button
               className={classes.buttonOnDown}
               onClick={() => {
                  Meteor.call(
                     "users.subtractRating",
                     order.recipient,
                     (err, res) => {
                        console.log(err, res);
                     }
                  );
                  Meteor.call(
                     "orders.changeStatusToFinished",
                     order,
                     (err, res) => {
                        console.log(err, res);
                     }
                  );
               }}
            >
               <ThumbDownIcon />
            </button>
         </React.Fragment>
      );
   }
   console.log(currentUser);
   console.log(order);

   return (
      users.length > 1 &&
      currentUser &&
      currentUser._id === order.owner && (
         <div className={classes.itemsContainer}>
            <div className={classes.leftContainer}>
               <div className={classes.nameAvatarContainer}>
                  <div className={classes.userAvatar}>
                     <Gravatar
                        className={classes.userAvatarImg}
                        email={recipient.emails[0].address}
                     />
                  </div>
                  <div className={classes.userName}>
                     {recipient.profile.firstName +
                        " " +
                        recipient.profile.lastName}
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
                  {recipient.profile.address}
               </div>
               <div>
                  Order Status:
                  <span className={classes.orderStatus}>{order.status}</span>
               </div>
               <div>{logButton}</div>
            </div>
         </div>
      )
   );
};

export default withTracker(() => {
   Meteor.subscribe("users");
   return {
      users: Meteor.users.find({}).fetch(),
      currentUser: Meteor.user()
   };
})(withStyles(styles)(YourOrdersListItem));
