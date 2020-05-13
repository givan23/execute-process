import React from "react";
import parser from "react-html-parser";
import quoteCentral from "../../snippet/quote/quote-central.html";
import sportList from "../../snippet/sport-list/sport-list.html";


class QuoteLayoutComponent extends React.Component {

    render() {
        return (
            <div id="js-layout-hook" className={'ph col-xs-18 col-sm-18 col-md-11 col-lg-11 horseContent'}>
                { parser(quoteCentral) }
                { parser(sportList) }
            </div>
        );
    }
}

export default QuoteLayoutComponent;