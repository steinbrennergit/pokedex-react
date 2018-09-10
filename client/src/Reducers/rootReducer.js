import { combineReducers } from 'redux';
import { changeName, loadPokemon } from './reducer';
export default combineReducers({
  changeName,
  pokemonList: loadPokemon
});


//: pokemonList.pokemon
// {
//     names: {
//         name: "Jimmy"
//     }
// }