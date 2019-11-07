import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import styles from "./styles";
import RecipientMap from "../../components/RecipientMap";
import Recipient from "../../components/Recipient";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";

const Recipients = ({ classes, recipients, currentUserId, currentUser }) => {
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
          {recipients.length > 0 && (
            <RecipientMap user={currentUser} recipients={recipients} />
          )}
        </div>
        <div className={classes.recipientListContainer}>
          {recipients.length > 0 &&
            recipients.map((user, index) => (
              <Recipient
                key={index}
                recipient={user}
                transitValue={transitValue}
              />
            ))}
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
