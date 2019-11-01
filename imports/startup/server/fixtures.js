import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { Orders } from "../../api/orders";

Meteor.startup(() => {
  console.log("HELLO");
  if (Meteor.users.find().count() === 0) {
    user1 = Accounts.createUser({
      email: "madisonhunter@email.com",
      password: "password",
      profile: {
        firstName: "Madison",
        lastName: "Hunter",
        address: "1475 W Broadway, Vancouver, BC",
        reciever: false,
        ownedOrders: [1, 2],
        otherOrders: []
      }
    });
    user2 = Accounts.createUser({
      email: "joeykramer@email.com",
      password: "password",
      profile: {
        firstName: "Joey",
        lastName: "Kramer",
        address: "1537 W Broadway, Vancouver, BC",
        reciever: true,
        ownedOrders: [],
        otherOrders: [1, 2]
      }
    });
    user3 = Accounts.createUser({
      email: "steventyler@email.com",
      password: "password",
      profile: {
        firstName: "Steven",
        lastName: "Tyler",
        address: "1410 W Broadway, Vancouver, BC",
        reciever: true,
        ownedOrders: [],
        otherOrders: []
      }
    });
    user4 = Accounts.createUser({
      email: "jimmycrespo@email.com",
      password: "password",
      profile: {
        firstName: "Jimmy",
        lastName: "Crespo",
        address: "1643 W Broadway, Vancouver, BC",
        reciever: false,
        ownedOrders: [],
        otherOrders: []
      }
    });
    user5 = Accounts.createUser({
      email: "tomhamiliton@email.com",
      password: "password",
      profile: {
        firstName: "Tom",
        lastName: "Hamiliton",
        address: "532 W Broadway #110, Vancouver, BC",
        reciever: true,
        ownedOrders: [],
        otherOrders: []
      }
    });
    user6 = Accounts.createUser({
      email: "rickdufay@email.com",
      password: "password",
      profile: {
        firstName: "Rick",
        lastName: "Dufay",
        address: "3832 Oak St, Vancouver, BC",
        reciever: true,
        ownedOrders: [],
        otherOrders: []
      }
    });
    user7 = Accounts.createUser({
      email: "bradwhitford@email.com",
      password: "password",
      profile: {
        firstName: "Brad",
        lastName: "Whitford",
        address: "2135 W 4th Ave, Vancouver, BC",
        reciever: true,
        ownedOrders: [],
        otherOrders: []
      }
    });
    user8 = Accounts.createUser({
      email: "raytobano@email.com",
      password: "password",
      profile: {
        firstName: "Ray",
        lastName: "Tobano",
        address: "1018 Beach Ave, Vancouver, BC",
        reciever: true,
        ownedOrders: [],
        otherOrders: []
      }
    });
  }
});
