import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Gravatar from "react-gravatar";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";

const OthersOrdersListItem = ({ classes, order, currentUser, users }) => {
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
            <span className={classes.orderIdAndDate}>
               {
                  order.maxDeliveryDays
                  //TODO fix this variable here!!!
               }
            </span>
         </div>
      );
   }

   if (order.status === "In Transit") {
      logButton = (
         <button
            className={classes.buttonDelivered}
            onClick={() => {
               Meteor.call(
                  "orders.changeStatusToDelivered",
                  order,
                  (err, res) => {
                     console.log(err, res);
                  }
               );
            }}
         >
            Delivered
         </button>
      );
   } else if (order.status === "Delivered") {
      logButton = (
         <button
            className={classes.buttonPickup}
            onClick={() => {
               console.log("clicked");
               Meteor.call(
                  "orders.changeStatusToCompleted",
                  order,
                  (err, res) => {
                     console.log(err, res);
                  }
               );
            }}
         >
            Picked Up
         </button>
      );
   } else {
      logButton = (
         <div className={classes.noButton}>Package Delivered to Owner</div>
      );
   }

   return (
      users.length > 1 &&
      currentUser &&
      currentUser._id === order.recipient && (
         <div className={classes.itemsContainer}>
            <div className={classes.leftContainer}>
               <div className={classes.nameAvatarContainer}>
                  <div className={classes.userAvatar}>
                     <Gravatar
                        className={classes.userAvatarImg}
                        email={owner.emails[0].address}
                     />
                  </div>
                  <div className={classes.userName}>
                     {owner.profile.firstName + " " + owner.profile.lastName}
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

OthersOrdersListItem.propTypes = {
   classes: PropTypes.any.isRequired,
   currentUser: PropTypes.object.isRequired,
   order: PropTypes.object.isRequired,
   users: PropTypes.array.isRequired
};

export default withTracker(() => {
   Meteor.subscribe("users");
   return {
      users: Meteor.users.find({}).fetch(),
      currentUser: Meteor.user()
   };
})(withStyles(styles)(OthersOrdersListItem));
