const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  // email: string, (unique)
  // password: string, (hashed and salted, we need bcrypt-nodejs and a lifecycle hook on create)
  // username: string, (validate: is: /^[a-z0-9\_\-]+$/i)
});

const User = mongoose.model("Pokemon", userSchema);

module.exports = User;