import React, { Component } from "react";
import "./BlueBtn.css";
// import API from "../../utils/API";

class BlueBtn extends Component {
    state = {
        pokemon: {}
    }

    getInfo = () => {
        console.log(this.state.pokemon)
    }

    componentDidMount() {
        this.setState({ pokemon: this.props.data })
    }

    render () {
        return (
            <button className="blue-btn" onClick={this.getInfo}>
                <img alt="" className="thumb" src={this.state.pokemon.sprite}></img>
            </button>
        )
    }
}

export default BlueBtn;