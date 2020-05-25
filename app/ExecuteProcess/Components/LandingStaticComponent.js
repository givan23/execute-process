import React from "react";
import parser from "react-html-parser";
import {staticLandingCentral} from "./snippet/landing/static.landing-central.js";
import staticSportList from "./snippet/sport-list/static.sport-list.html";
import staticSportListMobile from "./snippet/sport-list/static.sport-list-mobile.html";
import {isShow} from "../Utils/layoutUtils";

class LandingStaticComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {NODE_TYPE = "", subItemList = [], viewport = ""} = this.props;

        return <div>
                    {
                        NODE_TYPE === "ui-it" ?
                        <LandingItComponent subItemList={subItemList} viewport={viewport}/> :
                        <LandingBeComponent subItemList={subItemList} viewport={viewport}/>
                    }
               </div>

    }
}

export default LandingStaticComponent;

const LandingItComponent = ({subItemList, viewport}) => {

    const [landingCentral = {}, sportList = {}, sportListMobile = {}] = subItemList || [];

    return <div>
        {isShow(landingCentral, viewport) ? parser(staticLandingCentral) : null}
        {isShow(sportList, viewport) ? parser(staticSportList) : null}
        {isShow(sportListMobile, viewport) ? parser(staticSportListMobile) : null}
    </div>
};


const LandingBeComponent = ({subItemList, viewport}) => {

    const [landingCentral = {}, sportList = {}, sportListMobile = {}] = subItemList || [];

    return <div>
        {isShow(landingCentral, viewport) ? parser(staticLandingCentral) : null}
        {isShow(sportList, viewport) ? parser(staticSportList) : null}
        {isShow(sportListMobile, viewport) ? parser(staticSportListMobile) : null}
    </div>
};