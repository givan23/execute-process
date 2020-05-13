import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import {QuoteComponent} from "../../../Components/centralContent/layout/QuoteComponent";



const getCentralContent = (state) => state.centralContentReducers.centralContent;
const getScreenSize = (state) => state.centralContentReducers.screenSize;


const mapStateToProps = createSelector (
    [getCentralContent, getScreenSize],
    (centralContent, screenSize) => {

        return {
            message: "Quote page"
        };
    }
);

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteComponent);