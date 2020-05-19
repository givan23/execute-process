import parser from "react-html-parser";
import quoteCentral from "../../snippet/quote/quote-central.html";
import sportList from "../../snippet/sport-list/sport-list.html";
import {isShow} from "../../../Utils/layoutUtils";
import sportListMobile from "../../snippet/sport-list/sport-list-mobile.html";
import React from "react";


class QuoteLayoutComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const p = this.props;

        return <div className="container-layout">

            {isShow(p.sportList,p.viewport) ? parser(sportList) : null}
            {isShow(p.sportListMobile,p.viewport) ? parser(sportListMobile) : null}
            {isShow(p.quoteCentral,p.viewport) ? parser(quoteCentral) : null}
        </div>
    }
}

export default QuoteLayoutComponent;