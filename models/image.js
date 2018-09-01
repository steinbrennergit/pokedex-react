const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  // Most likely not needed as we can now wrap images in with the pokemon
  // model without too much trouble
});

const Image = mongoose.model("Pokemon", imageSchema);

module.exports = Image;