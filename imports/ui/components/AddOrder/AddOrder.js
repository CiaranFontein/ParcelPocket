import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

class AddOrder extends Component {
   constructor(props) {
      super(props);
      this.classes = props.classes;
   }
   addOrder = () => {
      Meteor.call(
         "orders.addOrder",
         this.props.currentUserId,
         this.props.recipient._id,
         this.props.transitValue
      );
   };
   render(classes) {
      return (
         <Button className={this.classes.button} onClick={this.addOrder}>
            Create Order
         </Button>
      );
   }
}

AddOrder.propTypes = {
   props: PropTypes.any.isRequired
};

export default withStyles(styles)(AddOrder);
