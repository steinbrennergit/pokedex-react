import React, { Component } from "react";
import DexTop from "../../components/DexTop";
import DexBot from "../../components/DexBot";
import BlueScreen from "../../components/BlueScreen";
import { connect } from "react-redux";
import "./Home.css"

const mapStateToProps = state => ({ pokemon: state.pokemonList.pokemon });

const mapDispatchToProps = dispatch => {
    return {dispatch};
  };

class Home extends Component {

    isLoaded() {
        if (this.props.pokemon && this.props.pokemon.length > 1) {
            return <BlueScreen key="screen" pokemon={this.props.pokemon} />;
        } else {
            return;
        }
    }

    render() {
        return (
        <div id="display">
            <DexTop />
                {this.isLoaded()}
            <DexBot />
        </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);