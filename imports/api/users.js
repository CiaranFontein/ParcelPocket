if (Meteor.isServer) {
  Meteor.publish("users", function usersPublication() {
    return Meteor.users.find({});
  });
}
<<<<<<< HEAD

=======
>>>>>>> cff44adbbd2ec2af741e739e45362a07e293f513
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
