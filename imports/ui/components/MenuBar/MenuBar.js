import React from "react";
import { Meteor } from "meteor/meteor";
import Gravatar from "react-gravatar";
import { Link } from "react-router-dom";
import { flexbox } from "@material-ui/system";
import { withTracker } from "meteor/react-meteor-data";
import styles from "./styles";
import {
  withStyles,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  MenuItem,
  Menu,
  Typography,
  ListItemIcon
} from "@material-ui/core";
import { withRouter } from "react-router";
import {
  MoreVert,
  Fingerprint,
  AddCircle,
  PowerSettingsNew
} from "@material-ui/icons";

const Header = ({ classes, currentUser }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // console.log(currentUser);
  // const options = [
  //   {
  //     path: "/profile",
  //     name: "Profile",
  //     icon: <Fingerprint fontSize="default" />
  //   }
  //   {
  //     path: "/login",
  //     name: "Sign Out",
  //     icon: <PowerSettingsNew fontSize="default" />
  //   }
  // ];
  return (
    <AppBar className={classes.appBar} position="static" color="default">
      <Toolbar className={classes.flexToolbar}>
        <Link className={classes.logoimg} to="/recipients">
          <img
            src="http://localhost:3000/images/white_small_transparent.png"
            alt="logo"
            width="100px"
          />
        </Link>

        <div className={classes.mainlinks}>
          <Link to="/recipients" style={{ textDecoration: "none" }}>
            <Button className={classes.iconButton}>Create Order</Button>
          </Link>

          <Link to="/orders" style={{ textDecoration: "none" }}>
            <Button className={classes.iconButton}>Orders</Button>
          </Link>

          <Link to="/parcels" style={{ textDecoration: "none" }}>
            <Button className={classes.iconButton}>Parcels</Button>
          </Link>
        </div>

        <div className={classes.profiledetails}>
          <div className={classes.gravatarcontainer}>
            <Gravatar
              className={classes.gravatarimage}
              email="ciaran.fountain@gmail.com"
            />
          </div>
          <div className={classes.profilenamerating}>
            <p className={classes.profilename}>
              {currentUser && currentUser.profile.firstName + " "}
              {currentUser && currentUser.profile.lastName}
            </p>
            <p className={classes.profilerating}>
              Score: {currentUser && currentUser.profile.score}
            </p>
          </div>
          <div className={classes.navlinks}>
            <Link to="/profile" style={{ textDecoration: "none" }}>
              <Button className={classes.navlinksbutton} variant="contained">
                Profile
              </Button>
            </Link>

            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button
                className={classes.navlinksbutton}
                onClick={() =>
                  Meteor.logout(error => {
                    console.log(error);
                  })
                }
                variant="contained"
              >
                Sign Out
              </Button>
            </Link>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withTracker(() => {
  // console.log(Meteor.userId());
  return {
    currentUser: Meteor.user()
  };
})(withStyles(styles)(Header));
