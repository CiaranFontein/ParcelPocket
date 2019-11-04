import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Gravatar from "react-gravatar";

const OthersOrdersListItem = ({ classes, order, viewer }) => {
   //TODO  delete the viewer, date and order fake data
   viewer = {
      _id: "5678"
   };

   order = {
      _id: "123456",
      status: "In Transit",
      receiver: {
         _id: "9876",
         name: "Joe Kramer",
         email: "test@test.com",
         address: "1234, W Broadway, Vancouver BC",
         ratings: "400",
         receiver: false
      },
      owner: {
         _id: "5678",
         name: "Madison Hunter",
         email: "test@test.com",
         address: "1234, W Broadway, Vancouver BC",
         ratings: "400",
         receiver: false
      },
      dateExpected: "Dec 25, 2019"
   };
   DateDelivered = "Dec 28, 2019";
   //TODO Delete data above for order, date and viewer

   //Code bellow here< above just fake data
   if (order.status === "Complete") {
      logDate = (
         <div>
            Delivered Date:{" "}
            <span className={classes.orderIdAndDate}>{DateDelivered}</span>
         </div>
      );
   } else {
      logDate = (
         <div>
            Expected Delivery Date:{" "}
            <span className={classes.orderIdAndDate}>{order.dateExpected}</span>
         </div>
      );
   }

   if (order.status === "In Transit") {
      logButton = (
         <button className={classes.buttonDelivered}>Delivered</button>
      );
   } else if (order.status === "Delivered") {
      logButton = <button className={classes.buttonPickup}>Picked Up</button>;
   } else {
      logButton = (
         <div className={classes.noButton}>Package Delivered to Owner</div>
      );
   }
   if (viewer._id === order.owner._id) {
      return (
         <div className={classes.itemsContainer}>
            <div className={classes.leftContainer}>
               <div className={classes.nameAvatarContainer}>
                  <div className={classes.userAvatar}>
                     <Gravatar
                        className={classes.userAvatarImg}
                        email={order.owner.email}
                     />
                  </div>
                  <div className={classes.userName}>{order.owner.name}</div>
               </div>
               <div className={classes.dateInfo}>
                  <span></span>
                  {logDate}
               </div>
               <div className={classes.orderNumber}>
                  Order Number:{" "}
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
      );
   }
};

export default withStyles(styles)(OthersOrdersListItem);