import React, { Component } from "react";
// import BlueBtn from "../BlueBtn";
// import Slider from "../Slider";
import Card from "../Card";
import CSSTransitionGroup from "react-addons-css-transition-group"
import "./BtnRow.css";

class BtnRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            buttons: [],
            pokemon: null
        };
    }

    componentWillMount() {
        let fnArr = [];

        for (let i = 0; i < 5; i++) {
            fnArr.push(function () {
                let visible = true;
                if (this.props.arr[i] === this.state.pokemon) {
                    visible = !this.state.visible;
                }
                this.setState({
                    visible,
                    pokemon: this.props.arr[i]
                });
            });
        }

        this.setState({ buttons: fnArr });
    }

    fillRow(arr) {
        return (arr.map((el, i) => (
            <button className="blue-btn" onClick={this.state.buttons[i].bind(this)}>
                <img alt="" className="thumb" src={el.sprite} />
            </button>
        )));
    }

    render() {
        return (
            <div>
                <div className="mid-row">
                    <CSSTransitionGroup transitionName="pokeSlide">
                        {this.state.visible ? <Card {...this.state.pokemon} /> : <div></div>}
                    </CSSTransitionGroup>
                </div>
                <div className="flex-row">
                    {this.fillRow(this.props.arr)}
                </div>
            </div>
        )
    }
}

export default BtnRow;