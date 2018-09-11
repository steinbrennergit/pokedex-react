import React, { Component } from "react";
import BtnRow from "../BtnRow";
import Slider from "../Slider";
import "./BlueScreen.css"

function fillRows(pokemon, num) {
    // console.log(pokemon);

    let arrNest = [];

    for (let i = 4; i < 150; i += 5) {
        let arr = [pokemon[i - 4], pokemon[i - 3], pokemon[i - 2], pokemon[i - 1], pokemon[i]];
        arrNest.push(arr);
    }

    arrNest.push([pokemon[150]]);

    return (
        arrNest.map((el) => {
            if (el.indexOf(pokemon[num - 1]) > -1) {
                let obj = {
                    name: pokemon[num - 1].name,
                    num,
                    type: pokemon[num - 1].type1,
                    power: pokemon[num - 1].total,
                    img: pokemon[num - 1].img
                }
                console.log(obj);
                return (
                    <div>
                    <Slider {...obj} />
                    <BtnRow key={`row-${el[0]._id}`} arr={el} />
                    </div>
                )
            } else {
                return <BtnRow key={`row-${el[0]._id}`} arr={el} />
            }
        })
    )
}

class BlueScreen extends Component {

    render() {
        return (
            <div className="flex-container">
                {fillRows(this.props.pokemon, this.props.cardNum)}
            </div>
        )
    }
}

export default BlueScreen;