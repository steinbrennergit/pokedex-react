import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./pages/Home";
import Empty from "./pages/Empty";
import { loadPokemon } from "./actions";
import API from "./utils/API";

const mapStateToProps = state => ({ pokemon: state.pokemonList.pokemon });

const mapDispatchToProps = dispatch => {
  return {
    load: function (pokemon) { dispatch(loadPokemon(pokemon)) }
  };
};

class App extends Component {

  componentDidMount() {
    API.getPokemon().then((res) => {
      this.props.load(res.data);
    }).catch((err) => { return console.log("MUAHAHAHA", err); })
  }

  render() {
    if (this.props.pokemon.length > 0) {
      return (
        <Home pokemon={this.props.pokemon} />
      );
    } else {
      return (
        <Empty />
      )
    }
  }
}

// const App = (props) => {
//   return (
//     <div>
//       <h1>Hi {props.pokemon}!</h1>
//       <button onClick={() => props.name("Tucker")}>Tucker</button>
//       <button onClick={() => props.name("Chris")}>Chris</button>
//       <button onClick={() => props.name("Jimmy")}>Jimmy</button>
//     </div>
//   )
// };



export default connect(mapStateToProps, mapDispatchToProps)(App);

// const componentDidMount = function (props) {
//   API.getPokemon().then((res) => {
//     console.log("it works");
//   })
// }