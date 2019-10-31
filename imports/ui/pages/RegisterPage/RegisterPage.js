import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Form, Field } from "react-final-form";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import styles from "./styles";

const RegisterPage = ({ classes }) => {
   console.log(classes);
   return (
      <div className={classes.registerContainer}>
         <img
            className={classes.logo}
            src="/images/white_small.png"
            alt="pp logo"
         />
         <div className={classes.registerFormContainer}>
            <h1>Register</h1>
            <Form
               onSubmit={true}
               // validate={true}
               render={({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                     <div className={classes.flexContainer}>
                        <div className={classes.needFlex}>
                           <Field
                              name="firstName"
                              component="input"
                              placeholder="First Name"
                              placeholderTextColor={"#BFBFBF"}
                              className={classes.field}
                           />
                           <Field
                              name="lastName"
                              component="input"
                              placeholder="Last Name"
                              className={classes.field}
                           />
                           <Field
                              name="email"
                              component="input"
                              placeholder="E-mail"
                              className={classes.field}
                           />
                        </div>
                        <div className={classes.needFlex}>
                           <Field
                              name="address"
                              component="input"
                              placeholder="Address"
                              className={classes.field}
                           />
                           <Field
                              name="city"
                              component="input"
                              placeholder="City"
                              className={classes.field}
                           />
                           <div className={classes.postalFlex}>
                              <Field
                                 name="postalCode"
                                 component="input"
                                 placeholder="Postal Code"
                                 className={classes.postalCode}
                              />
                              <Field
                                 name="province"
                                 component="input"
                                 placeholder="Province"
                                 className={classes.postalCode}
                              />
                           </div>
                        </div>
                     </div>
                     <h2 className={classes.receiver}>
                        Would You Like to be a Receiver?
                     </h2>
                     <div className={classes.buttonsYesNo}>
                        <button className={classes.buttonsYes} type="submit">
                           <span className={classes.yes}>Yes</span>
                        </button>
                        <button className={classes.buttonsNo} type="submit">
                           <span className={classes.yes}>No</span>
                        </button>
                     </div>
                     <div className={classes.agreementConteiner}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                     </div>
                     <div className={classes.checkbox}>
                        <FormControlLabel
                           control={
                              <Checkbox
                                 checked={""}
                                 onChange={() => ""}
                                 value=""
                                 color="primary"
                              />
                           }
                           label="Agree"
                        />
                     </div>
                     <div className={classes.submitButton}>
                        <button className={classes.buttonSubmit} type="submit">
                           <span className={classes.submit}>Submit</span>
                        </button>
                     </div>
                  </form>
               )}
            />
         </div>
      </div>
   );
};

export default withStyles(styles)(RegisterPage);
