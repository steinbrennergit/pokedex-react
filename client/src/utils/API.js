import axios from "axios";

export default {
  // Gets all books
  getPokemon: function() {
    return axios.get("/api/pokemon");
  },
  // Gets the book with the given id
  getPokemonById: function(id) {
    return axios.get("/api/pokemon/" + id);
  },
  // Deletes the book with the given id
  savePokemon: function(id) {
    return axios.post("/api/pokemon/" + id);
  }
};
