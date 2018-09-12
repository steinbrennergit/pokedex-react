import React, { Component } from "react";
import "./DexTop.css";

class DexTop extends Component {

    render() {
        return (
            <div className={`pokedex ${this.props.closed}`} id="pokedexTop">
                <div className="halfCircle" id="halfCircleTop"></div>
            </div>
        )
    }
}

export default DexTop;