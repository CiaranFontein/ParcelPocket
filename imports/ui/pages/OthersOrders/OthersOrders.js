import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import OthersOrdersListItem from "../../components/OthersOrdersListItem";
import { withTracker } from "meteor/react-meteor-data";
import { Orders } from "../../../api/orders";
import Loading from "../../components/Loading";
import PropTypes from "prop-types";

const OthersOrders = ({ currentUser, orders, classes }) => {
  const othersOrders = orders.filter(
    order => order.recipient === currentUser._id
  );
  return othersOrders.length >= 0 ? (
    othersOrders.length === 0 ? (
      <div className={classes.notRecipientText}>
        <div>You are not the recipient for any orders!</div>
      </div>
    ) : (
      othersOrders.map(order => (
        <OthersOrdersListItem key={order._id} order={order} />
      ))
    )
  ) : (
    <Loading />
  );
};

OthersOrders.propTypes = {
  classes: PropTypes.any,
  orders: PropTypes.array.isRequired
};

export default withTracker(() => {
  Meteor.subscribe("orders");
  return {
    orders: Orders.find({}).fetch(),
    currentUser: Meteor.user()
  };
})(withStyles(styles)(OthersOrders));
