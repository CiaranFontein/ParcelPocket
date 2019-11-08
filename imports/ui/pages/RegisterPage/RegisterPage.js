import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Accounts } from "meteor/accounts-base";
import { Form, Field } from "react-final-form";
import { Meteor } from "meteor/meteor";
import {
  Checkbox,
  TextField,
  Radio,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  StyledRadio,
  FormControl
} from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./styles";

const API_KEY = Meteor.settings.public.REACT_APP_GOOGLE_API_KEY;

const addUser = async values => {
  const user = {
    email: values.email,
    password: values.password,
    profile: {
      firstName: values.firstName,
      lastName: values.lastName,
      address: values.address,
      reciever: values.receiver[0],
      score: 0
    }
  };
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${values.address}&key=${API_KEY}`;
  const result = await fetch(url);
  const location = await result.json();
  values.location = location.results[0].geometry.location;
  values.placeId = location.results[0].place_id;
  console.log(values);
};
const signIn = ({ email, password }) => {
  Meteor.loginWithPassword(email, password);
  Accounts.createUser(user, error => {
    if (error) console.log(error);
  });
};

const RegisterPage = ({ classes }) => {
  return (
    <div className={classes.registerContainer}>
      <Link to="/login">
        <img
          className={classes.logo}
          src="/images/white_small.png"
          alt="pp logo"
        />
      </Link>

      <div className={classes.registerFormContainer}>
        <h1>Register</h1>
        <Form
          onSubmit={values => addUser(values)}
          // validate={true}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className={classes.flexContainer}>
                <div className={classes.needFlex}>
                  <Field
                    name="firstName"
                    render={({ input, meta }) => (
                      <TextField
                        id="standard-with-placeholder"
                        label="First Name"
                        placeholder="First Name"
                        className={classes.field}
                        margin="normal"
                        {...input}
                        value={input.value}
                      />
                    )}
                  />
                  <Field
                    name="lastName"
                    render={({ input, meta }) => (
                      <TextField
                        id="standard-with-placeholder"
                        label="Last Name"
                        placeholder="Last Name"
                        className={classes.field}
                        margin="normal"
                        {...input}
                        value={input.value}
                      />
                    )}
                  />
                  <Field
                    name="email"
                    render={({ input, meta }) => (
                      <TextField
                        id="standard-with-placeholder"
                        label="E-mail"
                        placeholder="E-mail"
                        className={classes.field}
                        margin="normal"
                        {...input}
                        value={input.value}
                      />
                    )}
                  />
                </div>
                <div className={classes.needFlex}>
                  <Field
                    name="address"
                    render={({ input, meta }) => (
                      <TextField
                        id="standard-with-placeholder"
                        label="Address"
                        placeholder="Address"
                        className={classes.field}
                        margin="normal"
                        {...input}
                        value={input.value}
                      />
                    )}
                  />
                  <Field
                    name="password1"
                    render={({ input, meta }) => (
                      <TextField
                        id="standard-with-placeholder"
                        label="Password"
                        placeholder="Password"
                        className={classes.field}
                        margin="normal"
                        {...input}
                        value={input.value}
                        type="password"
                      />
                    )}
                  />
                  <Field
                    name="password"
                    render={({ input, meta }) => (
                      <TextField
                        id="standard-with-placeholder"
                        label="Repeat Password"
                        placeholder="Repeat Password"
                        className={classes.field}
                        margin="normal"
                        {...input}
                        value={input.value}
                        type="password"
                      />
                    )}
                  />
                </div>
              </div>
              <h2 className={classes.receiver}>
                Would You Like to be a Receiver?
              </h2>
              <div className={classes.buttonsYesNo}>
                <label className={classes.buttonsYes}>
                  <Field
                    name="receiver"
                    component="input"
                    type="radio"
                    value="true"
                    className={classes.inputNo}
                  />{" "}
                  <span className={classes.yes}>Yes</span>
                </label>
                <label className={classes.buttonsNo}>
                  <Field
                    name="receiver"
                    component="input"
                    type="radio"
                    value="false"
                    className={classes.inputNo}
                  />{" "}
                  <span className={classes.yes}>No</span>
                </label>
              </div>
              <div className={classes.agreementConteiner}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <div className={classes.checkbox}>
                <label>
                  <Field
                    name="agree"
                    component="input"
                    type="checkbox"
                    value="true"
                    placeholder="test"
                  />
                  I agree
                </label>
              </div>
              <div className={classes.submitButton}>
                <button className={classes.buttonSubmit} type="submit">
                  <span className={classes.submit}>Submit</span>
                </button>
              </div>
              <Link className={classes.back} to="/login">
                <span>Back to login</span>
              </Link>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default withStyles(styles)(RegisterPage);
