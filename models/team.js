const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  // The Sequelize schema for this was basically:
  // p0: num,
  // p1: num,
  // p2: num ...
  // ...
  // p9: num
  // user_id: id pointing to the owner (an instance of user model)
  // However, as mongo can store values as arrays, this may not be necessary
  // A team of pokemon IDs stored as an array could be stored in the user model
});

const Team = mongoose.model("Pokemon", teamSchema);

module.exports = Team;