import React from 'react';
import {Route, Switch} from 'react-router'
import QuoteContainer from "../Containers/central-content/layout/QuoteContainer";
import LandingContainer from "../Containers/central-content/layout/LandingContainer";

const CentralContentRouting = () => {

    return (
        <div id="js-layout-hook" className={'ph col-xs-18 col-sm-18 col-md-11 col-lg-11 horseContent'}>

                <Switch>
                    <Route path="/quote" component={QuoteContainer}/>
                    <Route path="/" component={LandingContainer}/>
                </Switch>

        </div>
    )
};

export default CentralContentRouting;
