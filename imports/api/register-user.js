import { Mongo } from "meteor/mongo";
import { Accounts } from "meteor/accounts-base";
export const addUser = new Mongo.Collection("users");

Meteor.methods({
   //Use this syntax to add order when we have a select recipient button
   //Meteor.call("orders.addOrder", 1, 2, 30);
   "users.addUser"(firstName, lastName, email, address, password, receiver) {
      if (users.find({ emails: { $elemMatch: { address: email } } }).count()) {
         throw new Meteor.Error(
            "users.addUser.not-authorized",
            "This email is already in the register, please try to login"
         );
      }
      Accounts.createUser({
         email: email,
         password: password,
         profile: {
            firstName: firstName,
            lastName: lastName,
            address: address,
            reciever: receiver
         }
      });
   }
});
