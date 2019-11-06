import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import OthersOrdersListItem from "../../components/OthersOrdersListItem";
import { withTracker } from "meteor/react-meteor-data";
import { Orders } from "../../../api/orders";

const OthersOrders = ({ orders, classes }) => {
   console.log("othersOrder page here");
   return orders.length > 0
      ? orders.map((order) => (
           <OthersOrdersListItem key={order._id} order={order} />
        ))
      : "loading";
};

export default withTracker(() => {
   Meteor.subscribe("orders");
   return {
      orders: Orders.find({}).fetch()
   };
})(withStyles(styles)(OthersOrders));
