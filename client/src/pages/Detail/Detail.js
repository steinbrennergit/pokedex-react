import React, { Component } from "react";
import DexTop from "../../components/DexTop";
import DexBot from "../../components/DexBot";
import BlueScreen from "../../components/BlueScreen";
import { connect } from "react-redux";
import "./Detail.css"

const mapStateToProps = state => ({ pokemon: state.pokemonList.pokemon });

const mapDispatchToProps = dispatch => {
    return {};
};

class Detail extends Component {

    isLoaded() {
        if (this.props.pokemon && this.props.pokemon.length > 1) {
            return <BlueScreen key="screen" pokemon={this.props.pokemon} cardNum={this.props.match.params.id} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(Detail);