import { Mongo } from "meteor/mongo";

export const Orders = new Mongo.Collection("orders");

Meteor.methods({
  //Use this syntax to add order when we have a select recipient button
  //Meteor.call("orders.addOrder", 1, 2, 30);
  "orders.addOrder"(ownerId, recipientId, maxDeliveryDays) {
    if (!this.ownerId) {
      throw new Meteor.Error(
        "orders.addOrder.not-authorized",
        "User needs to be logged in to add Orders"
      );
    }
    Orders.insert({
      owner: ownerId,
      recipient: recipientId,
      status: "In Transit",
      maxDeliveryDays: maxDeliveryDays
    });
  }
});
