import { height } from "@material-ui/system";

const styles = theme => ({
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
    padding: 10,
    marginBottom: 30
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
    paddingLeft: 10,
    marginBottom: 10,
    marginRight: 10
  },
  postalProvince: {
    width: "50%",
    fontSize: "0.4em",
    height: "3em",
    paddingLeft: 10,
    marginBottom: 10
  },
  field: {
    fontSize: "0.4em",
    height: "3em",
    paddingLeft: 10,
    marginBottom: 10
  },
  buttonsYesNo: {
    display: "flex",
    width: "45%",
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
    width: "8em",
    height: "3em",
    borderRadius: "7em",
    background: "#3051A1",
    color: "white",
    display: "flex",
    alignItems: "center"
  },
  yes: {
    fontSize: "2em"
  },
  buttonsNo: {
    width: "8em",
    height: "3em",
    borderRadius: "7em",
    background: "#2F9F80",
    color: "white",
    display: "flex",
    alignItems: "center"
  },
  inputNo: {
    width: "3em",
    height: "4em",
    marginLeft: 10
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
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto"
  },
  back: {
    textDecoration: "none",
    fontSize: "1.2em"
  },
  submit: {
    fontSize: "2em"
  }
});

export default styles;
