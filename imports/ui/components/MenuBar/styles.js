const styles = theme => ({
  flexToolbar: {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    marginLeft: 400,
    marginRight: 400
  },
  appBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(2),
    boxShadow: "none",
    marginTop: "none",
    paddingTop: "none"
  },
  gravatarimage: {
    borderRadius: "50%",
    padding: 20
  },
  profiledetails: {
    display: "flex",
    border: "0px solid grey",
    borderRadius: "15px"
  },
  profilenamerating: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center"
  },
  navlinks: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingLeft: "10px",
    paddingRight: "10px"
  },
  gravatarcontainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  profilename: {
    margin: "none"
  },
  profilerating: {
    margin: "none"
  },
  navlinksbutton: {
    width: "130px",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "grey"
    }
  },
  iconButton: {
    fontSize: "20px",
    textTransform: "capitalize",
    margin: "20px"
  },
  logoimg: {
    padding: "20px"
  }
});

export default styles;
