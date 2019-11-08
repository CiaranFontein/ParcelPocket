import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import PropTypes from "prop-types";

const AccountLogin = ({ classes }) => {
   return (
      <div className={classes.root}>
         <img
            src="/images/white.png"
            width={"300px"}
            className={classes.logo}
         ></img>

         <LoginForm />
      </div>
   );
};

AccountLogin.propTypes = {
   classes: PropTypes.any.isRequired
};

export default withStyles(styles)(AccountLogin);
