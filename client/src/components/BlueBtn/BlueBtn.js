import React, { Component } from "react";
import "./BlueBtn.css";
// import API from "../../utils/API";

class BlueBtn extends Component {
    state = {
        pokemon: {}
    }

    componentDidMount() {
        this.setState({ pokemon: this.props.data })
    }

    render () {
        return (
            <button key={this.props.key} className="blue-btn">
                <img alt="" className="thumb" src={this.state.pokemon.sprite}></img>
            </button>
        )
    }
}

export default BlueBtn;