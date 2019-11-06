import { Mongo } from "meteor/mongo";
export const Orders = new Mongo.Collection("orders");

if (Meteor.isServer) {
   Meteor.publish("orders", function ordersPublication() {
      return Orders.find({});
   });
}

Meteor.methods({
   //  "orders.getAll"() {
   //     if (todo.owner !== this.userId) {
   //        throw new Meteor.Error(
   //           "todos.toggleComplete.not-authorized",
   //           "You are not allowed to update to-dos for other users."
   //        );
   //     }
   //     ToDos.update(todo._id, {
   //        $set: { complete: !todo.complete }
   //     });
   //  }
});
