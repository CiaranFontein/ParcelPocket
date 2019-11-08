import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import YourOrdersListItem from "../../components/YourOrdersListItem";
import { withTracker } from "meteor/react-meteor-data";
import { Orders } from "../../../api/orders";
import Loading from "../../components/Loading";
import PropTypes from "prop-types";

const YourOrders = ({ currentUser, orders, classes }) => {
  const ownedOrders = orders.filter(order => order.owner === currentUser.id);
  return ownedOrders.length >= 0 ? (
    ownedOrders.length === 0 ? (
      <div className={classes.noOrdersContainer}>
        <div className={classes.noOrdersMessage}>
          You have not made any orders yet!
        </div>
      </div>
    ) : (
      ownedOrders.map(order => (
        <YourOrdersListItem key={order._id} order={order} />
      ))
    )
  ) : (
    <Loading />
  );
};

YourOrders.propTypes = {
  classes: PropTypes.any,
  orders: PropTypes.array.isRequired
};

export default withTracker(() => {
  Meteor.subscribe("orders");
  return {
    orders: Orders.find({}).fetch(),
    currentUser: Meteor.user()
  };
})(withStyles(styles)(YourOrders));
