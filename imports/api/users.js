import { Meteor } from "meteor/meteor";

if (Meteor.isServer) {
<<<<<<< HEAD
  Meteor.publish("users", function usersPublication() {
    return Meteor.users.find({});
  });
=======
   Meteor.publish("users", function usersPublication() {
      return Meteor.users.find({});
   });
>>>>>>> 59150cb9ae2be93607938d617fcf5a9e2c4ee2ad
}
