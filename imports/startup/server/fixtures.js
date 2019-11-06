import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import Orders from "../../api/orders";

Meteor.startup(() => {
  if (Meteor.users.find().count() === 0) {
    user1 = Accounts.createUser({
      email: "madisonhunter834@gmail.com",
      password: "password",
      profile: {
        firstName: "Madison",
        lastName: "Hunter",
        address: "1475 W Broadway, Vancouver, BC",
        reciever: false,
        ownedOrders: [],
        otherOrders: [],
        score: 0,
        location: {
          lat: 49.2634483,
          lng: -123.1381682
        },
        placeId: "ChIJV8QansdzhlQRatww-ihk6jo"
      }
    });
    user2 = Accounts.createUser({
      email: "joeykramer834@gmail.com",
      password: "password",
      profile: {
        firstName: "Joey",
        lastName: "Kramer",
        address: "1537 W Broadway, Vancouver, BC",
        reciever: true,
        ownedOrders: [],
        otherOrders: [],
        score: 419,
        location: {
          lat: 49.26296319999999,
          lng: -123.1383187
        },
        placeId: "ChIJecsOesdzhlQREFckW4a4A4g"
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
        otherOrders: [],
        score: 432,
        location: {
          lat: 49.2632526,
          lng: -123.1387273
        },
        placeId: "ChIJe8ouDsdzhlQRGPlBKCRt2W0"
      }
    });
    user4 = Accounts.createUser({
      email: "jimmycrespo@email.com",
      password: "password",
      profile: {
        firstName: "Jimmy",
        lastName: "Crespo",
        address: "1643 W Broadway, Vancouver, BC",
        reciever: true,
        ownedOrders: [],
        otherOrders: [],
        score: 734754,
        location: {
          lat: 49.2639002,
          lng: -123.1442899
        },
        placeId: "ChIJrTLr-GyuEmsRBfy61i59si0"
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
        otherOrders: [],
        score: 0,
        location: {
          lat: 49.2630976,
          lng: -123.1183367
        },
        placeId: "ChIJZx_Rbt1zhlQR8mA7YsSr8nQ"
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
        otherOrders: [],
        score: 476,
        location: {
          lat: 49.2514875,
          lng: -123.12947
        },
        placeId: "ChIJTaOma5NzhlQRW5nFLa_Q4ck"
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
        otherOrders: [],
        score: 21,
        location: {
          lat: 49.2682739,
          lng: -123.155877
        },
        placeId: "ChIJ25t0P7RzhlQRTwPhlCEkujo"
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
        otherOrders: [],
        score: 125,
        location: {
          lat: 49.2761147,
          lng: -123.1364298
        },
        placeId: "ChIJE-dFY9JzhlQRSVRu5AZjpb8"
      }
    });
    user9 = Accounts.createUser({
      email: "a@a.com",
      password: "a",
      profile: {
        firstName: "A",
        lastName: "Aron",
        address: "2135 W 4th Ave, Vancouver, BC",
        reciever: true,
        ownedOrders: [],
        otherOrders: [],
        score: 21,
        location: {
          lat: 49.262,
          lng: -123.1383
        },
        placeId: "ChIJecsOesdzhlQREFckW4a4A4g"
      }
    });
  }
});
