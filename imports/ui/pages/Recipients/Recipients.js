import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import styles from "./styles";
import RecipientMap from "../../components/RecipientMap";
import MenuBar from "../../components/MenuBar";

const Recipients = ({ classes }) => {
  return (
    <div className={classes.recipientsPage}>
      <MenuBar />
      <div className={classes.recipientsPageContainer}>
        Recipients
        <div className={classes.optionsPanel}>
          <div className={classes.deliveryWindow}>
            <Typography id="max-transit-time-slider" gutterBottom>
              Max Transit Time (days)
            </Typography>
            <Slider
              defaultValue={14}
              aria-labelledby="Max Transit Time (days)"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={100}
            />
          </div>
          <div className={classes.maxRange}>
            <Typography id="max-range-slider" gutterBottom>
              Max Range (km)
            </Typography>
            <Slider
              defaultValue={10}
              aria-labelledby="Max Range (km)"
              valueLabelDisplay="auto"
              step={5}
              marks
              min={0}
              max={50}
            />
          </div>
        </div>
        <div className={classes.mapContainer}>
          <RecipientMap />
        </div>
        <div className={classes.recipientListContainer}>Recipient List</div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Recipients);
