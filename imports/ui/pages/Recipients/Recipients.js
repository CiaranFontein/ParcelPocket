import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import styles from "./styles";
import RecipientMap from "../../components/RecipientMap";
import Recipient from "../../components/Recipient";
import { withTracker } from "meteor/react-meteor-data";

const Recipients = ({ classes, users, user }) => {
  const [transitValue, setTransitValue] = React.useState(10);
  const [distanceValue, setDistanceValue] = React.useState(10);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          <RecipientMap currentUser={user} users={users} />
        </div>
        <div className={classes.recipientListContainer}>
          {users.map((user, index) => (
            <Recipient key={index} user={user} transitValue={transitValue} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default withTracker(() => {
  Meteor.subscribe("users");
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    users: Meteor.users.find({ _id: { $ne: Meteor.userId() } }).fetch()
  };
})(withStyles(styles)(Recipients));
