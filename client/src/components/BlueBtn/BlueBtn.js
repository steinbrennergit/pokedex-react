import React from "react";
import "./BlueBtn.css";
import API from "../../utils/API";

class BlueBtn extends React.component {
    state = {
        pokemon: {}
    }

    componentDidMount() {
        API.getPokemonByDex(parseInt(this.props.dex))
            .then(res => this.setState({ pokemon: res.data }))
            .catch(err => console.log(err));
    }

    render () {
        return (
            <button className="blue-btn">
                <img className="thumb" src={this.state.pokemon.sprite}></img>
            </button>
        )
    }
}

// state = {
//     pokemon: {}
// }

// componentDidMount() {
//     API.getPokemonByDex(this.props.match.params.id)
//         .then(res => this.setState({ book: res.data }))
//         .catch(err => console.log(err));
// }

// const BlueBtn = (props) => (
//     <button className="blue-btn">
//         <img className="thumb" src={props.img}></img>
//     </button>
// );

export default BlueBtn;