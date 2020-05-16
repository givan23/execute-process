import React from "react";
import parser from "react-html-parser";
import {landingCentral} from "../../snippet/landing/landing-central.js";
import sportList from "../../snippet/sport-list/sport-list.html";
import sportListMobile from "../../snippet/sport-list/sport-list-mobile.html";
import {isShow} from "../../../Utils/layoutUtils";


class LandingLayoutComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let viewport = this.props.viewport;
console.log(viewport);
        return <div>
            {isShow(this.props.landingCentral,viewport) ? parser(landingCentral) : null}
            {isShow(this.props.sportList,viewport) ? parser(sportList) : null}
            {isShow(this.props.sportListMobile,viewport) ? parser(sportListMobile) : null}
        </div>
    }
}

export default LandingLayoutComponent;

// const LandingDesktopComponent = ({props}) => {
//
//     return <div>
//         {isShow(props.landingCentral) ? parser(landingCentral) : null}
//         {isShow(props.sportList) ? parser(sportList) : null}
//     </div>
// };
//
// const LandingMobileComponent = ({props}) => {
//
//     return <div>
//         {isShow(props.landingCentral) ? parser(landingCentral) : null}
//         {isShow(props.sportListMobile) ? parser(sportListMobile) : null}
//     </div>
// }