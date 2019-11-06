import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
export const Orders = new Mongo.Collection("orders");

if (Meteor.isServer) {
   Meteor.publish("orders", function ordersPublication() {
      return Orders.find({});
   });
}

Meteor.methods({
   "orders.addOrder"(ownerId, recipientId, maxDeliveryDays) {
      console.log("added order");
      Orders.insert({
         owner: ownerId,
         recipient: recipientId,
         status: "In Transit",
         maxDeliveryDays: maxDeliveryDays
      });
   },
   "orders.changeStatusToDelivered"(order) {
      if (order.recipient !== Meteor.userId()) {
         throw new Meteor.Error(
            "orders.changeStatusToDelivered.not-authorized",
            "You are not allowed to change status."
         );
      }
      Orders.update(order._id, {
         $set: { status: "Delivered" }
      });
   },
   "orders.changeStatusToCompleted"(order) {
      if (order.recipient !== Meteor.userId()) {
         throw new Meteor.Error(
            "orders.changeStatusToCompleted.not-authorized",
            "You are not allowed to change status."
         );
      }
      Orders.update(order._id, {
         $set: { status: "Completed" }
      });
   },
   "orders.changeStatusToFinished"(order) {
      Orders.update(order._id, {
         $set: { status: "Finished" }
      });
   }
});
