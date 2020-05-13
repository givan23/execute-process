import React from "react";
import parser from "react-html-parser";
import {landingCentral} from "../../snippet/landing/landing-central.js";
import sportList from "../../snippet/sport-list/sport-list.html";


class LandingLayoutComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colore: props.colore
        };
    }

    render() {
        return (

            <div>
                { parser(landingCentral) }
                { parser(sportList) }

            </div>

        );
    }
}

export default LandingLayoutComponent;