const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  // dexNum: number, 
  // indexedName: string,
  // name: string, 
  // type1: string,
  // type2: string
  // total: number,
  // hp: number,
  // atk: number,
  // def: number,
  // spAtk: number,
  // spDef: number,
  // speed: number,
  // generation: number,
  // legendary: boolean,
  // img: string,
  // sprite: string
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = Pokemon;