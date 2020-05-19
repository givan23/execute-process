import React from "react";
import parser from "react-html-parser";
import {landingCentral} from "./snippet/landing/landing-central.js";
import sportList from "./snippet/sport-list/sport-list.html";
import sportListMobile from "./snippet/sport-list/sport-list-mobile.html";
import {isShow} from "../Utils/layoutUtils";

class LandingStaticComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const p = this.props;

        return <div>
            {isShow(p.landingCentral,p.viewport) ? parser(landingCentral) : null}
            {isShow(p.sportList,p.viewport) ? parser(sportList) : null}
            {isShow(p.sportListMobile,p.viewport) ? parser(sportListMobile) : null}
        </div>
    }
}

export default LandingStaticComponent;