import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

class AddOrder extends Component {
<<<<<<< HEAD
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
    return <Button onClick={this.addOrder}>Create Order</Button>;
  }
=======
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
>>>>>>> 515bb9dec79a6bffa1371d56f6589d8a46aa1497
}

AddOrder.propTypes = {
   props: PropTypes.any.isRequired
};

export default withStyles(styles)(AddOrder);
