import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Form, Field } from "react-final-form";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import styles from "./styles";
import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";

class LoginForm extends Component {
  signIn = event => {
    let email = event.target.loginEmail.value;
    let password = event.target.loginPassword.value;
    console.log(event.target.loginEmail.value);
    console.log(event.target.loginPassword.value);

    Meteor.loginWithPassword(email, password, function(error) {
      if (Meteor.user()) {
        console.log(JSON.stringify(Meteor.user(), null, 2));
        alert(`Hey, Your User ID is: ${Meteor.userId()}`);
      } else {
        alert(error.reason);
      }
    });
  };

  render() {
    return (
      <div>
        <Form
          onSubmit={() => {}}
          render={({ handleSubmit }) => (
            <form
              onSubmit={event => {
                event.preventDefault();
                this.signIn(event);
              }}
              //className={classes.form}
            >
              <div>
                <Field
                  name="loginEmail"
                  render={({ input, meta }) => (
                    <div>
                      <input
                        {...input}
                        placeholder="Your Email"
                        value={input.value}
                        id="login-email"
                        // className={classes.field}
                      />
                    </div>
                  )}
                />
                <Field
                  name="loginPassword"
                  render={({ input, meta }) => (
                    <div>
                      <input
                        {...input}
                        placeholder="Password"
                        // className={classes.field}
                        type="password"
                        value={input.value}
                        id="login-password"
                      />
                    </div>
                  )}
                />
              </div>
              <div
              //   className={classes.buttons}
              >
                <Button
                  variant="contained"
                  id="login-button"
                  type="submit"
                  value="sign in"
                  //   className={classes.login}
                >
                  Login
                </Button>

                <Link to="/register">
                  <Button
                    variant="contained"
                    //   className={classes.signup}
                  >
                    Signup
                  </Button>
                </Link>
              </div>
            </form>
          )}
        />
      </div>
    );
  }
}

export default withStyles(styles)(LoginForm);
