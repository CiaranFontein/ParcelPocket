import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import styles from "./styles";
import RecipientMap from "../../components/RecipientMap";
import Recipient from "../../components/Recipient";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";

<<<<<<< HEAD
const Recipients = ({ classes, users, currentUser }) => {
=======
const Recipients = ({ classes, recipients, currentUserId }) => {
>>>>>>> b40a46817d8fe959d7f6feb90468a149c54516e9
  const [transitValue, setTransitValue] = React.useState(10);
  const [distanceValue, setDistanceValue] = React.useState(10);
  // console.log(recipients);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // console.log(currentUserId);
  return (
    <div className={classes.recipientsPage}>
      <div className={classes.recipientsPageContainer}>
        Recipients
        <div className={classes.optionsPanel}>
          <div className={classes.deliveryWindow}>
            <Typography id="max-transit-time-slider" gutterBottom>
              Max Transit Time (days)
            </Typography>
            <Slider
              value={transitValue}
              defaultValue={14}
              aria-labelledby="Max Transit Time (days)"
              valueLabelDisplay="auto"
              step={1}
              min={0}
              max={100}
              onChange={(event, value) => setTransitValue(value)}
            />
          </div>
          <div className={classes.maxRange}>
            <Typography id="max-range-slider" gutterBottom>
              Max Range (km)
            </Typography>
            <Slider
              value={distanceValue}
              defaultValue={10}
              aria-labelledby="Max Range (km)"
              valueLabelDisplay="auto"
              step={1}
              min={0}
              max={50}
              onChange={(event, value) => setDistanceValue(value)}
            />
          </div>
        </div>
        <div className={classes.recipientMapContainer}>
<<<<<<< HEAD
          {currentUser && (
            <RecipientMap user={currentUser} recipients={users} />
          )}
        </div>
        <div className={classes.recipientListContainer}>
          {users.map((recipient, index) => (
            <Recipient
              key={index}
              recipient={recipient}
              transitValue={transitValue}
            />
          ))}
=======
          <RecipientMap currentUser={Meteor.user()} users={recipients} />
        </div>
        <div className={classes.recipientListContainer}>
          {recipients.length > 0 &&
            recipients.map((user, index) => (
              <Recipient key={index} user={user} transitValue={transitValue} />
            ))}
>>>>>>> b40a46817d8fe959d7f6feb90468a149c54516e9
        </div>
      </div>
    </div>
  );
};

export default withTracker(() => {
  Meteor.subscribe("users");
  return {
    recipients: Meteor.users
      .find({
        $and: [{ _id: { $ne: Meteor.userId() } }, { "profile.reciever": true }]
      })
      .fetch(),
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId()
  };
})(withStyles(styles)(Recipients));

// db.users.find({ $and: [{ _id: {$ne:Meteor.userId()}}, { "profile.reciever" : true}]} ).
