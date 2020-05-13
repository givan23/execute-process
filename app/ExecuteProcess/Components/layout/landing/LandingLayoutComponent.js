import React from "react";
import parser from "react-html-parser";
import {landingCentral} from "../../snippet/landing/landing-central.js";
import sportList from "../../snippet/sport-list/sport-list.html";
import {isShow} from "../../../Utils/layoutUtils";


class LandingLayoutComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div>
                {isShow(this.props.landingCentral) ? parser(landingCentral) : null}
                {isShow(this.props.sportList) ? parser(sportList) : null}
            </div>

        );
    }
}

export default LandingLayoutComponent;