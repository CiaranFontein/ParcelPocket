import { Meteor } from "meteor/meteor";
//import { ToDos } from "../../api/todos";
import { Accounts } from "meteor/accounts-base";

Meteor.startup(() => {
  if (Meteor.users.find().count() === 0) {
    user = Accounts.createUser({
      email: "user@email.com",
      password: "password"
    });
    user = Accounts.createUser({
      email: "madisonhunter@email.com",
      password: "password"
    });
    user = Accounts.createUser({
      email: "joeykramer@email.com",
      password: "password"
    });
  }
});
