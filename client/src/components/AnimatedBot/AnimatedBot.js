import React, { Component } from "react";
import "./AnimatedBot.css";
import Transition from 'react-transition-group/Transition';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
};

const Fade = () => (
  <Transition in={false} timeout={duration}>
    {(state) => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        I'm a fade Transition!
      </div>
    )}
  </Transition>
);

class AnimatedBot extends Component {
    render() {
        return (
            <div className={`pokedex ${this.props.closed}`} id="pokedexBottom">
                <div className="halfCircle" id="halfCircleBottom">
                    <input className="blueCircle" id="blueCircle" type="button"></input>
                </div>
            </div>
        )
    }
}

export default AnimatedBot;