const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  // email: string, (unique)
  // password: string, (hashed and salted, we need bcrypt-nodejs and a lifecycle hook on create)
  // username: string, (validate: is: /^[a-z0-9\_\-]+$/i)
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  favorites: [
    {
      // Store ObjectIds in the array
      type: [Schema.Types.ObjectId],
      // The ObjectIds will refer to the ids in the Pokemon model
      ref: "Pokemon"
    }
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;