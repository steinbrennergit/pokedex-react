import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {connect} from "react-redux";
import Btns from "./pages/Btns/Btns";
import {displayPokemon} from "./actions";

const App = (props) => {
  return (
  <div>
    <h1>Hi {props.pokemon.name}!</h1>
    onClick={() => props.pokemon("")}
    <button onClick={() => props.foobar("Chris")}>Chris</button>
    <button onClick={() => props.foobar("Jimmy")}>Jimmy</button>
  </div>
  )
};

const mapStateToProps = state => ({pokemon: state.names});

const mapDispatchToProps = dispatch => {
  return { 
    pokemon: function(name) { dispatch(changeName(name)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
