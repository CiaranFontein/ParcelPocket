import React from "react";
import { Meteor } from "meteor/meteor";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { Form, Field } from "react-final-form";
import { TextField } from "@material-ui/core";
import { withTracker } from "meteor/react-meteor-data";
import PropTypes from "prop-types";
import Loading from "../../components/Loading";

const API_KEY = Meteor.settings.public.REACT_APP_GOOGLE_API_KEY;

const updateProfile = async values => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${values.address}&key=${API_KEY}`;
  const result = await fetch(url);
  const location = await result.json();
  values.location = location.results[0].geometry.location;
  values.placeId = location.results[0].place_id;
  Meteor.users.update(Meteor.userId(), { $set: { profile: values } });
};

const Profile = props => {
  const { currentUser, classes } = props;
  return currentUser ? (
    <div className={classes.registerContainer}>
      <div className={classes.registerFormContainer}>
        <h1>Update Profile</h1>
        <Form
          initialValues={{
            firstName: currentUser.profile.firstName,
            lastName: currentUser.profile.lastName,
            email: currentUser.emails[0].address,
            address: currentUser.profile.address,
            receiver: currentUser.profile.receiver
          }}
          onSubmit={values => updateProfile(values)}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className={classes.flexContainer}>
                <div className={classes.needFlex}>
                  <Field
                    name="firstName"
                    render={({ input, meta }) => (
                      <TextField
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
  ) : (
    <Loading />
  );
};

Profile.propTypes = {
  classes: PropTypes.any,
  currentUser: PropTypes.object.isRequired
};

export default withTracker(() => {
  return {
    currentUser: Meteor.users.findOne({ _id: Meteor.userId() })
  };
})(withStyles(styles)(Profile));
