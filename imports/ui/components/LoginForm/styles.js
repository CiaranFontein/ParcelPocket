const styles = theme => ({
  field: {
    border: "1px solid grey",
    backgroundColor: "white",
    color: "#2f509f",
    fontSize: "20px",
    width: "350px",
    alignItems: "center",
    height: "30px",
    marginBottom: "20px",

    "&::placeholder": {
      alignItems: "center",
      paddingLeft: "15px"
    }
  },
  form: {
    backgroundColor: "white"
  },
  login: {
    backgroundColor: "#2f509f",
    height: "50px",
    width: "140px",
    borderRadius: 50,
    border: "1px solid grey"
  },
  signup: {
    backgroundColor: "#2f9f80",
    height: "50px",
    width: "140px",
    borderRadius: 50,
    border: "1px solid grey",
    color: "white"
  },
  buttons: {
    display: "flex",
    justifyContent: "space-evenly",
    borderRadius: "150px",
    marginTop: "20px"
  }
});

export default styles;
