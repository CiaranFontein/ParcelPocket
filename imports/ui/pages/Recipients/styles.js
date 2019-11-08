const styles = theme => ({
  recipientsPage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  recipientsPageContainer: {
    width: "70vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  optionsPanel: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "30vw",
    margin: theme.spacing(2)
  },
  deliveryWindow: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    margin: theme.spacing(2),
    alignItems: "center",
    display: "none"
  },
  maxRange: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    margin: theme.spacing(1),
    alignItems: "center",
    display: "none"
  },
  recipientMapContainer: {
    position: "relative",
    width: "100%",
    height: 400,
    margin: theme.spacing(1)
  },
  recipientListContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: theme.spacing(2),
    alignItems: "center",
    width: "100%"
  },
  recipButton: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    marginLeft: 400
  }
});
export default styles;
