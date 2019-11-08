import React from "react";
import { Meteor } from "meteor/meteor";
import Gravatar from "react-gravatar";
import { Link } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";
import styles from "./styles";
import { withStyles, AppBar, Toolbar, Button } from "@material-ui/core";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

const Header = ({ classes, currentUser }) => {
   const [anchorEl, setAnchorEl] = React.useState(null);

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

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
                     email={currentUser && currentUser.emails[0].address}
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
                     <Button
                        className={classes.navlinksbutton}
                        variant="contained"
                     >
                        Profile
                     </Button>
                  </Link>

                  <Link to="/login" style={{ textDecoration: "none" }}>
                     <Button
                        className={classes.navlinksbutton}
                        onClick={() =>
                           Meteor.logout((error) => {
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

Header.propTypes = {
   classes: PropTypes.any.isRequired,
   currentUser: PropTypes.object
};

export default withTracker(() => {
   return {
      currentUser: Meteor.user()
   };
})(withStyles(styles)(Header));
