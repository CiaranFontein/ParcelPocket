const styles = theme => ({
  flexToolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  recipientContainer: {
    width: "100%"
  },
  itemsContainer: {
    display: "flex",
    width: 400,
    margin: 20,
    border: "2px solid black"
  },
  leftContainer: {
    width: 400,
    padding: 20
  },
  nameAvatarContainer: {
    display: "flex"
  },
  userAvatar: {},
  userAvatarImg: {
    borderRadius: "50%"
  },
  userName: {
    marginTop: "auto",
    marginBottom: "auto",
    paddingLeft: 10,
    fontSize: "2em"
  },
  dateInfo: {
    padding: 10
  },
  orderNumber: {
    padding: 10
  },
  rightContainer: {
    width: "50%",
    textAlign: "right",
    padding: 20,
    display: "flex",
    flexFlow: "column",
    justifyContent: "space-around"
  },
  orderStatus: {
    color: "blue",
    fontWeight: "bold",
    fontSize: "1.1em",
    paddingLeft: 5
  },
  orderIdAndDate: {
    fontWeight: "bold"
  }
});

export default styles;
