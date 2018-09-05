import axios from "axios";

export default {
  // Gets all pokemon
  getPokemon: function() {
    return axios.get("/api/pokemon");
  },
  // Gets the pokemon with the given id
  getPokemonById: function(id) {
    return axios.get("/api/pokemon/" + id);
  },
  // Gets the pokemon with the given dex num
  getPokemonByDex: function(dex) {
    return axios.get("/api/pokemon/dex/" + dex);
  },
  // Gets the pokemon with the given indexed name
  getPokemonByName: function(name) {
    return axios.get("/api/pokemon/in/" + name);
  },
  // Saves the pokemon with the given id for the user
  savePokemon: function(id) {
    return axios.post("/api/pokemon/" + id);
  }
};
