import React, { Component } from "react";
import BtnRow from "../../components/BtnRow";
import API from "../../utils/API";
import "./Btns.css"

function fillRows(pokemon) {

    let arrNest = [];

    for (let i = 4; i < 150; i += 5) {
        let arr = [pokemon[i - 4], pokemon[i - 3], pokemon[i - 2], pokemon[i - 1], pokemon[i]];
        arrNest.push(arr);
    }

    arrNest.push([pokemon[150]]);

    return (
        arrNest.map(el => <BtnRow key={`row-${el[0]._id}`} arr={el} />)
    )
}

class Btns extends Component {
    state = {
        pokemon: null
    }

    componentDidMount() {
        API.getPokemon().then((res) => {
            // console.log(this);
            this.setState({ pokemon: res.data })
        })
    }

    render() {
        if (this.state.pokemon) {
            return (
                <div className="flex-container">
                    {fillRows(this.state.pokemon)}
                </div>
            )
        } else {
            return (
                <div className="flex-container">

                </div>
            )
        }
    }
}

export default Btns;
