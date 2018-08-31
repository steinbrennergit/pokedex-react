const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  
});

const Image = mongoose.model("Pokemon", imageSchema);

module.exports = Image;