const styles = theme => ({
  recipientsPage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  recipientsPageContainer: {
    width: "70vw",
    height: "90vh",
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
    alignItems: "center"
  },
  maxRange: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    margin: theme.spacing(1),
    alignItems: "center"
  },
  mapContainer: {
    margin: theme.spacing(1),
    position: "relative",
    height: "100%",
    width: "100%"
  },
  recipientListContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: theme.spacing(2),
    alignItems: "center"
  }
});
export default styles;
