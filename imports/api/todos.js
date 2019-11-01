// import { Mongo } from "meteor/mongo";

// if (Meteor.isServer) {
//   Meteor.publish("todos", function todosPublication() {
//     return ToDos.find({ owner: this.userId });
//   });
// }

// Meteor.methods({
//   "todos.addToDo"(title) {
//     if (!this.userId) {
//       throw new Meteor.Error(
//         "todos.addToDo.not-authorized",
//         "User needs to be logged in to add ToDos"
//       );
//     }
//     ToDos.insert({
//       title,
//       complete: false,
//       owner: this.userId
//     });
//   },
//   "todos.removeToDo"(todo) {
//     if (!this.userId) {
//       throw new Meteor.Error(
//         "todos.removeToDo.not-authorized",
//         "User needs to be logged in to remove ToDos"
//       );
//     }

//     if (this.userId !== todo.owner) {
//       throw new Meteor.Error(
//         "todos.removeToDo.not-authorized",
//         "User cannot remove other users' todos"
//       );
//     }

//     ToDos.remove({
//       _id: todo._id
//     });
//   },
//   "todos.removeCompleted"() {
//     if (!this.userId) {
//       throw new Meteor.Error(
//         "todos.removeCompleted.not-authorized",
//         "User needs to be logged in to remove completed ToDos"
//       );
//     }
//     ToDos.remove({
//       complete: true,
//       owner: this.userId
//     });
//   },
//   "todos.toggleComplete"(todo) {
//     if (todo.owner !== this.userId) {
//       throw new Meteor.Error(
//         "todos.toggleComplete.not-authorized",
//         "You are not allowed to update to-dos for other users."
//       );
//     }
//     ToDos.update(todo._id, {
//       $set: { complete: !todo.complete }
//     });
//   }
// });

// export const ToDos = new Mongo.Collection("todos");
