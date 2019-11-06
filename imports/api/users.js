import { Meteor } from "meteor/meteor";

export const Users = Meteor.users;

if (Meteor.isServer) {
   Meteor.publish("users", function usersPublication() {
      return Meteor.users.find({});
   });
}
