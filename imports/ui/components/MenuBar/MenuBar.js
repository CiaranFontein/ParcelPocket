import React from "react";
import { Link } from "react-router-dom";
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
    },
    {
      path: "/login",
      name: "Sign Out",
      icon: <PowerSettingsNew fontSize="default" />
    }
  ];
  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar className={classes.flexToolbar}>
        <Link to="./recipients">
          <IconButton
            className={classes.iconButton}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <img
              src="http://localhost:3000/images/white.png"
              alt="logo"
              width="40px"
            />
          </IconButton>
        </Link>
        <Link to="./recipients">
          <Button className={classes.iconButton}>
            <AddCircle />
            Recipients
          </Button>
        </Link>
        <Link to="./yourorders">
          <Button className={classes.iconButton}>
            <AddCircle />
            Your Orders
          </Button>
        </Link>
        <Link to="./othersorders">
          <Button className={classes.iconButton}>
            <AddCircle />
            Others' Orders
          </Button>
        </Link>
        <IconButton
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
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
