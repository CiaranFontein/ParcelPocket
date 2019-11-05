import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { Form, Field } from "react-final-form";
import { TextField } from "@material-ui/core";
import { withTracker } from "meteor/react-meteor-data";

const updateProfile = values => {
  console.log(values);
  // // Meteor.call("users.addUser", values);
  Meteor.users.update(Meteor.userId(), { $set: { profile: values } });
  // const updateUser = Meteor.users.find();
  // // console.log(updateUser);
};

const Profile = props => {
  console.log(props);
  const user = props.currentUser;
  const { classes } = props;
  return (
    <div className={classes.registerContainer}>
      <img
        className={classes.logo}
        src="/images/white_small.png"
        alt="pp logo"
      />
      <div className={classes.registerFormContainer}>
        <h1>Update Profile</h1>
        <Form
          initialValues={{
            firstName: user.profile.firstName,
            lastName: user.profile.lastName,
            email: user.emails[0].address,
            address: user.profile.address,
            receiver: user.profile.receiver
          }}
          onSubmit={values => updateProfile(values)}
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

              <div className={classes.submitButton}>
                <button className={classes.buttonSubmit} type="Update">
                  <span className={classes.submit}>Update</span>
                </button>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default withTracker(props => {
  Meteor.subscribe("users");
  return {
    currentUser: Meteor.user()
  };
})(withStyles(styles)(Profile));
