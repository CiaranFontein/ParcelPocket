import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

if (Meteor.isServer) {
  Meteor.publish("users", function usersPublication() {
    return Meteor.users.find({});
  });
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
