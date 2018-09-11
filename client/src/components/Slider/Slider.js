import React, { Component } from "react";
import "./Slider.css";
import Card from "../Card";
import CSSTransitionGroup from "react-addons-css-transition-group"

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false };
    }

    componentDidMount() {
    	this.setState({ visible: true });
    }

    render() {
        return (
            <CSSTransitionGroup transitionName="pokeSlide">
            	{ this.state.visible ? <Card {...this.props} /> : null }
            </CSSTransitionGroup>
        );
    }
}

export default Slider;