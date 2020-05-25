import parser from "react-html-parser";
import {isShow} from "../Utils/layoutUtils";
import staticQuoteCentral from "./snippet/quote/static.quote-central.html";
import staticSportList from "./snippet/sport-list/static.sport-list.html";
import staticSportListMobile from "./snippet/sport-list/static.sport-list-mobile.html";
import React from "react";


class QuoteStaticComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {NODE_TYPE = "", subItemList = [], viewport = ""} = this.props;


        return <div>
                    {
                        NODE_TYPE === "ui-it" ?
                            <QuoteItComponent subItemList={subItemList} viewport={viewport}/> :
                            <QuoteBeComponent subItemList={subItemList} viewport={viewport}/>
                    }
               </div>
    }
}

export default QuoteStaticComponent;

const QuoteItComponent = ({subItemList, viewport}) => {

    const [quoteCentral = {}, sportList = {}, sportListMobile = {}] = subItemList || [];

    return <div className="container-layout">
        {isShow(sportList, viewport) ? parser(staticSportList) : null}
        {isShow(sportListMobile, viewport) ? parser(staticSportListMobile) : null}
        {isShow(quoteCentral, viewport) ? parser(staticQuoteCentral) : null}
    </div>
};

const QuoteBeComponent = ({subItemList, viewport}) => {

    const [quoteCentral = {}, sportList = {}, sportListMobile = {}] = subItemList || [];

    return <div className="container-layout">
        {isShow(sportList, viewport) ? parser(staticSportList) : null}
        {isShow(sportListMobile, viewport) ? parser(staticSportListMobile) : null}
        {isShow(quoteCentral, viewport) ? parser(staticQuoteCentral) : null}
    </div>
};


