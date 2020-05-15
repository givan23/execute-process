import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import {LandingComponent} from "../../../Components/centralContent/layout/LandingComponent";


const getCentralContent = (state) => state.centralContentReducers.centralContent;



const mapStateToProps = createSelector (
    [getCentralContent],
    (centralContent, screenSize) => {


        return {
            message: "Landing page"
        };
    }
);

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingComponent);