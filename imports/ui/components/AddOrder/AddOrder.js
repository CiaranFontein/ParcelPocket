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

AddOrder.propTypes = {
   props: PropTypes.any.isRequired
};

export default withStyles(styles)(AddOrder);
