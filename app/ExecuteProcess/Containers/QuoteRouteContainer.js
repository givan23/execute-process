import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import QuoteLayoutComponent from "../Components/layout/quote/QuoteLayoutComponent";


const getStaticData = (state) => state.devtoolLayoutReducers.staticData;

const mapStateToProps = createSelector(
    [getStaticData],
    (staticData) => {

        return {
            snippetData: staticData
        };
    });

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteLayoutComponent);