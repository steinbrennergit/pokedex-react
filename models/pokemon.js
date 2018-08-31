const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = Pokemon;