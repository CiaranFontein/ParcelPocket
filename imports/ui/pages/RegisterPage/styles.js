import { height } from "@material-ui/system";

const styles = (theme) => ({
   registerContainer: {
      maxWidth: "80vw",
      height: "100vh"
   },
   registerFormContainer: {
      width: "60vw",
      margin: 0,
      marginLeft: "auto",
      marginRight: "auto",
      border: "1px solid black",
      padding: 10
   },
   logo: {
      width: "8vw"
   },
   flexContainer: {
      display: "flex",
      fontSize: "3em",
      justifyContent: "space-around"
   },
   postalFlex: {
      display: "flex",
      width: "100%"
   },
   needFlex: {
      display: "flex",
      flexFlow: "column",
      width: "45%",
      justifyContent: "space-between"
   },
   postalCode: {
      width: "50%",
      fontSize: "0.4em",
      height: "3em",
      paddingLeft: 10
   },
   field: {
      fontSize: "0.4em",
      height: "3em",
      paddingLeft: 10
   },
   buttonsYesNo: {
      display: "flex",
      width: "35%",
      justifyContent: "space-between",
      margin: 0,
      marginLeft: "auto",
      marginRight: "auto"
   },
   receiver: {
      width: "100%",
      textAlign: "center",
      marginTop: "2em"
   },
   buttonsYes: {
      width: "15em",
      height: "7em",
      borderRadius: "7em",
      background: "#3051A1",
      color: "white"
   },
   yes: {
      fontSize: "3em"
   },
   buttonsNo: {
      width: "15em",
      height: "7em",
      borderRadius: "7em",
      background: "#2F9F80",
      color: "white"
   },
   agreementConteiner: {
      marginTop: 30,
      marginBottom: 30,
      border: "1px solid black",
      padding: 10,
      width: "93%",
      margin: 0,
      marginLeft: "auto",
      marginRight: "auto"
   },
   checkbox: {
      width: "100%",
      textAlign: "right",
      width: "94%",
      margin: 0,
      marginLeft: "auto",
      marginRight: "auto"
   },
   buttonSubmit: {
      width: "13em",
      height: "5em",
      borderRadius: "5em",
      background: "#3051A1",
      color: "white"
   },
   submitButton: {
      width: "100%",
      textAlign: "right",
      marginTop: 30,
      width: "94%",
      margin: 0,
      marginLeft: "auto",
      marginRight: "auto"
   },
   submit: {
      fontSize: "2em"
   }
});

export default styles;
