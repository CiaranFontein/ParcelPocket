import React from "react";
import { Meteor } from "meteor/meteor";
import Gravatar from "react-gravatar";
import { Link } from "react-router-dom";
import { flexbox } from "@material-ui/system";
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

const Header = ({ classes }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const options = [
    {
      path: "/profile",
      name: "Profile",
      icon: <Fingerprint fontSize="default" />
    }
    // {
    //   path: "/login",
    //   name: "Sign Out",
    //   icon: <PowerSettingsNew fontSize="default" />
    // }
  ];
  return (
    <AppBar className={classes.appBar} position="static" color="default">
      <Toolbar className={classes.flexToolbar}>
        <Link to="/recipients">
          <IconButton
            className={classes.iconButton}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <img
              src="http://localhost:3000/images/white_small_transparent.png"
              alt="logo"
              width="70px"
            />
          </IconButton>
        </Link>

        <div className={classes.mainlinks}>
          <Link to="/recipients" style={{ textDecoration: "none" }}>
            <Button className={classes.iconButton}>Create Order</Button>
          </Link>

          <Link to="/yourorders" style={{ textDecoration: "none" }}>
            <Button className={classes.iconButton}>Orders</Button>
          </Link>

          <Link to="/othersorders" style={{ textDecoration: "none" }}>
            <Button className={classes.iconButton}>Parcels</Button>
          </Link>
        </div>

        {/* <IconButton
          onClick={handleClick}
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.iconButton}
        >
          <MoreVert />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {options.map((option, index) => (
            <Link key={index} to={option.path}>
              <MenuItem to={option.path} onClick={handleClose}>
                <ListItemIcon>{option.icon}</ListItemIcon>
                <Typography noWrap>{option.name}</Typography>
              </MenuItem>
            </Link>
          ))}
        </Menu> */}

        <div className={classes.profiledetails}>
          <div className={classes.gravatarcontainer}>
            <Gravatar
              className={classes.gravatarimage}
              email="ciaran.fountain@gmail.com"
            />
          </div>
          <div className={classes.profilenamerating}>
            <p className={classes.profilename}>Joey Kramer</p>
            <p className={classes.profilerating}>Rating: 9000</p>
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

export default withStyles(styles)(Header);
