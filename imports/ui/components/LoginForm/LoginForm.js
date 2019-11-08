import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Form, Field } from "react-final-form";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import styles from "./styles";
import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";

class LoginForm extends Component {
   constructor(props) {
      super(props);
      this.state = {
         error: null
      };
   }

   signIn = (values) => {
      Meteor.loginWithPassword(
         values.loginEmail,
         values.loginPassword,
         function(error) {
            if (Meteor.user()) {
               console.log(JSON.stringify(Meteor.user(), null, 2));
            }
            if (error) {
               this.setState({ error });
            }
         }.bind(this)
      );
   };

   render() {
      console.log(this.state.error);
      const { classes } = this.props;

      return (
         <div>
            <Form
               onSubmit={(values) => this.signIn(values)}
               render={({ handleSubmit }) => (
                  <form
                     onSubmit={(event) => {
                        event.preventDefault();
                        handleSubmit();
                     }}
                     className={classes.form}
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
                                    className={classes.field}
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
                                    className={classes.field}
                                    type="password"
                                    value={input.value}
                                    id="login-password"
                                 />
                              </div>
                           )}
                        />
                     </div>
                     <div className={classes.buttons}>
                        <Button
                           variant="contained"
                           id="login-button"
                           type="submit"
                           value="sign in"
                           className={classes.login}
                        >
                           Login
                        </Button>

                        <Link to="/register" style={{ textDecoration: "none" }}>
                           <Button
                              variant="contained"
                              className={classes.signup}
                           >
                              Signup
                           </Button>
                        </Link>
                     </div>
                  </form>
               )}
            />
            {this.state.error && (
               <p className={classes.errorMessage}>
                  Username or Password do not match.
               </p>
            )}
         </div>
      );
   }
}

LoginForm.propTypes = {
   props: PropTypes.any.isRequired
};

export default withStyles(styles)(LoginForm);
