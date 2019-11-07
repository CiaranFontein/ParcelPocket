import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { withStyles } from "@material-ui/core";
import styles from "./styles";

class AddOrder extends Component {
  constructor(props) {
    super(props);
  }

  addOrder = () => {
    Meteor.call(
      "orders.addOrder",
      this.props.currentUserId,
      this.props.recipient._id,
      this.props.transitValue
    );
  };

  render() {
    return <button onClick={this.addOrder}>Create Order</button>;
  }
}
export default withTracker(() => {
  Meteor.subscribe("users");
  return {
    currentUserId: Meteor.userId()
  };
})(withStyles(styles)(AddOrder));
