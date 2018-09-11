import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { loadPokemon } from "./actions";
import API from "./utils/API";

const mapStateToProps = state => ({ pokemon: state.pokemonList.pokemon });

const mapDispatchToProps = dispatch => {
  return {
    load: function (pokemon) { dispatch(loadPokemon(pokemon)) }
  };
};

class App extends Component {

  isLoaded() {
    console.log(this.state);
  }

  componentDidMount() {
    API.getPokemon().then((res) => {
      this.props.load(res.data);
    }).catch((err) => { return console.log("MUAHAHAHA", err); })
  }

  render() {
    return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/p/:id" component={Detail} />
        </Switch>
    </Router>
    )
  }
}

// if (this.props.pokemon.length > 0) {
//   return (
//     <Home pokemon={this.props.pokemon} />
//   );
// } else {
//   return (
//     <Detail />
//   )
// }

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