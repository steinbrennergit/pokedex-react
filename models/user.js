const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const pokemon = require("./pokemon");

const userSchema = new Schema({
  // email: string, (unique)
  // password: string, (hashed and salted, we need bcrypt-nodejs and a lifecycle hook on create)
  // username: string, (validate: is: /^[a-z0-9\_\-]+$/i)
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  // favorites: { type: [pokemon] }
});

const User = mongoose.model("User", userSchema);

module.exports = User;