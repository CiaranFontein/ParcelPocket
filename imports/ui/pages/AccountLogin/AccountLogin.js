import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Form, Field } from "react-final-form";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import LoginForm from "../../components/LoginForm/LoginForm";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";

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
