import React from 'react';
import {Route, Switch} from 'react-router'
import LandingLayoutContainer from "../LayoutContainers/central/LandingLayoutContainer";
import QuoteLayoutContainer from "../LayoutContainers/central/QuoteLayoutContainer";

const RoutingStaticCentralContent = () => {

    return (
        <div>
            <Switch>
                <Route path="/quote" component={QuoteLayoutContainer}/>
                <Route path="/" component={LandingLayoutContainer}/>

            </Switch>
        </div>
    )
};

export default RoutingStaticCentralContent;