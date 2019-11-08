import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

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
    const { classes } = this.props;
    return (
      <Button className={classes.button} onClick={this.addOrder}>
        Create Order
      </Button>
    );
  }
}

export default withStyles(styles)(AddOrder);
