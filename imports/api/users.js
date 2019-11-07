if (Meteor.isServer) {
   Meteor.publish("users", function usersPublication() {
      return Meteor.users.find({});
   });
}
Meteor.methods({
   "users.addRating"(id) {
      let partialScore = Meteor.users
         .find(id, { profile: { score: 1 } })
         .fetch()[0];
      let newScore = partialScore.profile.score + 1;
      console.log(partialScore);
      console.log(newScore);

      Meteor.users.update(id, {
         $set: { "profile.score": newScore }
      });
   },
   "users.subtractRating"(id) {
      let partialScore = Meteor.users
         .find(id, { profile: { score: 1 } })
         .fetch()[0];
      let newScore = partialScore.profile.score - 1;
      Meteor.users.update(id, {
         $set: { "profile.score": newScore }
      });
   }
});
