import { Accounts } from "meteor/accounts-base";

Meteor.methods({
   "users.addUser"(user) {
      if (
         Meteor.users
            .find({ emails: { $elemMatch: { address: user.email } } })
            .count()
      ) {
         throw new Meteor.Error(
            "users.addUser.not-authorized",
            "This email is already in the register, please try to login"
         );
      }
      Accounts.createUser({
         email: user.email,
         password: user.password,
         profile: {
            firstName: user.firstName,
            lastName: user.lastName,
            address: user.address,
            reciever: user.receiver[0],
            score: 0
         }
      });
   }
});
