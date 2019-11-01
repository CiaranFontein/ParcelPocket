import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Form, Field } from "react-final-form";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import styles from "./styles";

const LoginForm = ({ classes }) => {
  return (
    <div>
      <Form
        onSubmit={() => {}}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={classes.form}>
            <div>
              <Field
                name="username"
                render={({ input, meta }) => (
                  <div>
                    <input
                      {...input}
                      placeholder="Your Email"
                      className={classes.field}
                    />
                  </div>
                )}
              />
              <Field
                name="password"
                render={({ input, meta }) => (
                  <div>
                    <input
                      {...input}
                      placeholder="Password"
                      className={classes.field}
                      type="password"
                    />
                  </div>
                )}
              />
            </div>
            <div className={classes.buttons}>
              <Button
                variant="contained"
                type="submit"
                className={classes.login}
              >
                Login
              </Button>

              <Link to="/register">
                <Button variant="contained" className={classes.signup}>
                  Signup
                </Button>
              </Link>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default withStyles(styles)(LoginForm);
