import React, { Component } from "react";
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
export default withStyles(styles)(AddOrder);
