import { Mongo } from "meteor/mongo";

if (Meteor.isServer) {
  Meteor.publish("orders", () => {
    return Orders.find({});
  });
}
export const Orders = new Mongo.Collection("orders");
Meteor.methods({
  "orders.addOrder"(ownerId, recipientId, maxDeliveryDays) {
    console.log("added order");
    Orders.insert({
      owner: ownerId,
      recipient: recipientId,
      status: "In Transit",
      maxDeliveryDays: maxDeliveryDays
    });
  }
});
