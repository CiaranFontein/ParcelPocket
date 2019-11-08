import React, { Component } from "react";
import { mdiPackageVariantClosed } from "@mdi/js";
import Icon from "@mdi/react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import { Typography } from "@material-ui/core";

class Loading extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.loadingScreen}>
        <div className={classes.iconContainer}>
          <Icon
            className={classes.icon}
            path={mdiPackageVariantClosed}
            title="LoadingIcon"
            size={3}
            horizontal
            vertical
            color="white"
            spin={-1.5}
          />
        </div>
        <Typography size={5} className={classes.text}>
          Loading...
        </Typography>
      </div>
    );
  }
}
export default withStyles(styles)(Loading);
