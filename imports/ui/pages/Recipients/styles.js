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
    position: "relative",
    width: "100%",
    height: "100%",
    margin: theme.spacing(1)
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
