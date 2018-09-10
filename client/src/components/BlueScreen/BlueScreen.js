import React, { Component } from "react";
import BtnRow from "../BtnRow";
import API from "../../utils/API";
import "./BlueScreen.css"

function fillRows(pokemon) {
    console.log(pokemon);

    let arrNest = [];

    for (let i = 4; i < 150; i += 5) {
        let arr = [pokemon[i - 4], pokemon[i - 3], pokemon[i - 2], pokemon[i - 1], pokemon[i]];
        arrNest.push(arr);
    }

    arrNest.push([pokemon[150]]);

    return (
        arrNest.map(el => <div><BtnRow key={`row-${el[0]._id}`} arr={el} /><div className="placeholder" /></div>)
    )
}

class BlueScreen extends Component {

    render() {
        return (
            <div className="flex-container">
                {fillRows(this.props.pokemon)}
            </div>
        )
    }
}

export default BlueScreen;