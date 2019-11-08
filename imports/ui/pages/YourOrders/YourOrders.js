import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import YourOrdersListItem from "../../components/YourOrdersListItem";
import { withTracker } from "meteor/react-meteor-data";
import { Orders } from "../../../api/orders";
import Loading from "../../components/Loading";
import PropTypes from "prop-types";

const YourOrders = ({ orders, classes }) => {
  return orders.length > 0 ? (
    orders.map(order => <YourOrdersListItem key={order._id} order={order} />)
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
    orders: Orders.find({}).fetch()
  };
})(withStyles(styles)(YourOrders));
