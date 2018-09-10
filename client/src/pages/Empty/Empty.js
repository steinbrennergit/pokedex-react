import React, { Component } from "react";
import DexTop from "../../components/DexTop";
import DexBot from "../../components/DexBot";
import "./Empty.css"

class Empty extends Component {

    render() {
        return (
        <div id="display">
            <DexTop />
            <DexBot />
        </div>
        );
    }
}

export default Empty;
