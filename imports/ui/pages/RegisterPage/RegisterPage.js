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
import PropTypes from "prop-types";

const API_KEY = Meteor.settings.public.REACT_APP_GOOGLE_API_KEY;

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  addUser = async values => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${values.address}&key=${API_KEY}`;
    const result = await fetch(url);
    const location = await result.json();
    values.location = location.results[0].geometry.location;
    values.placeId = location.results[0].place_id;
    const user = {
      email: values.email,
      password: values.password,
      profile: {
        firstName: values.firstName,
        lastName: values.lastName,
        address: values.address,
        reciever: values.receiver,
        location: values.location,
        placeId: values.placeId,
        score: 0
      }
    };
    try {
      Accounts.createUser(
        user,
        function(error) {
          if (error) {
            this.setState({ error });
          }
        }.bind(this)
      );
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { classes } = this.props;
    const required = value => (value ? undefined : "Required");

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
            onSubmit={values => {
              try {
                this.state.error ? this.addUser(values) : this.addUser(values);
              } catch (e) {
                this.state.error
                  ? this.setState({ error: "User or password not valid" })
                  : this.setState({
                      error: "Please fill all fields with valid information"
                    });
                throw e;
              }
            }}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit}>
                <div className={classes.flexContainer}>
                  <div className={classes.needFlex}>
                    <Field
                      name="firstName"
                      // validate={required}
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
                      // validate={required}
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
                      // validate={required}
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
                      // validate={required}
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
                      // validate={required}
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
                      // validate={required}
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
                      // validate={required}
                      component="input"
                      type="radio"
                      value="false"
                      className={classes.inputNo}
                    />{" "}
                    <span className={classes.yes}>No</span>
                  </label>
                </div>
                <div>
                  {this.state.error && (
                    <p className={classes.errorMessage}>
                      Please Complete all fields and check password before
                      Submitting.
                    </p>
                  )}
                </div>

                <div className={classes.agreementConteiner}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
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
  }
}

RegisterPage.propTypes = {
  classes: PropTypes.any
};
export default withStyles(styles)(RegisterPage);
