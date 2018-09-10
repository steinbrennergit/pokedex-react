import React, { Component } from "react";
import DexTop from "../../components/DexTop";
import DexBot from "../../components/DexBot";
import BlueScreen from "../../components/BlueScreen";
import "./Home.css"

class Home extends Component {

    render() {
        return (
        <div id="display">
            <DexTop />
                <BlueScreen key="screen" pokemon={this.props.pokemon} />
            <DexBot />
        </div>
        );
    }
}

export default Home;
