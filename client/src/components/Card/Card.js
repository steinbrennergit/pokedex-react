import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
    render() {
        return (
            <div className="card">
                <img className="detail-img" src={this.props.img} alt="PokeSprite" />
                <ul id="info">
                    <li>Name: {this.props.name}</li>
                    <li>Number: {this.props.dexNum}</li>
                    <li>Type: {this.props.type1}</li>
                    <li>Total Power: {this.props.total}</li>
                </ul>
            </div>
        )
    }
}

export default Card;