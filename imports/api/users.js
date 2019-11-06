import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

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

Meteor.methods({
   "users.addRating"(user) {
      Meteor.users.update(user._id, {
         $set: { score: user.score + 1 }
      });
   },
   "users.subtractRating"(user) {
      Meteor.users.update(user._id, {
         $set: { score: user.score - 1 }
      });
   }
});
