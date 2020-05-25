import React from 'react';
import {Route, Switch} from 'react-router'
import LandingLayoutContainer from "../Containers/LandingStaticContainer";
import QuoteLayoutContainer from "../Containers/QuoteStaticContainer";

const RoutingStaticCentralContent = () => {

    return (
        <div>
            <Switch>
                {/*%InsertRoutes%*/}
                <Route path="/quote" component={QuoteLayoutContainer}/>
                <Route path="/" component={LandingLayoutContainer}/>
            </Switch>
        </div>
    )
};

export default RoutingStaticCentralContent;