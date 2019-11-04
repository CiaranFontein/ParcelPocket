const styles = (theme) => ({
   itemsContainer: {
      display: "flex",
      width: "50%",
      margin: 20,
      marginLeft: "auto",
      marginRight: "auto",
      border: "2px solid black"
   },
   leftContainer: {
      width: "50%",
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
   noButton: {
      margin: 0,
      fontWeight: "bold",
      fontSize: "1.3em"
   },
   buttonOnUp: {
      margin: 0,
      width: "5em",
      height: "2.5em",
      borderRadius: "4em",
      fontSize: "1.2em",
      backgroundColor: "#2f509f",
      color: "white",
      marginRight: 10
   },
   buttonOnDown: {
      margin: 0,
      width: "5em",
      height: "2.5em",
      borderRadius: "4em",
      fontSize: "1.2em",
      backgroundColor: "#2f9f80",
      color: "white",
      marginRight: 10
   },
   buttonOff: {
      margin: 0,
      width: "5em",
      height: "2.5em",
      borderRadius: "4em",
      fontSize: "1.2em",
      backgroundColor: "lightgrey",
      color: "white",
      marginRight: 10
   },
   orderIdAndDate: {
      fontWeight: "bold"
   }
});

export default styles;
