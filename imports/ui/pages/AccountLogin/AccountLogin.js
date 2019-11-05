import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

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

export default withStyles(styles)(AccountLogin);
