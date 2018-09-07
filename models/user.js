const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

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
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Pokemon model
      ref: "Pokemon"
    }
  ]
});

// userSchema.validPassword = function (pw) {
//   return bcrypt.compareSync(pw, this.password);
// }

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

// User.prototype.save(function (err, user) {
//   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
// });

module.exports = User;