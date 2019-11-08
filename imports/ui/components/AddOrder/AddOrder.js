import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import { Button } from "@material-ui/core";

class AddOrder extends Component {
  constructor(props) {
    super(props);
  }

  addOrder = () => {
    console.log(JSON.stringify(this.props));
    Meteor.call(
      "orders.addOrder",
      this.props.currentUserId,
      this.props.recipient._id,
      this.props.transitValue
    );
  };

  render() {
    return <Button onClick={this.addOrder}>Create Order</Button>;
  }
}
export default withTracker(() => {
  Meteor.subscribe("users");
  return {
    currentUserId: Meteor.userId()
  };
})(withStyles(styles)(AddOrder));
