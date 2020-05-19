import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import QuoteLayoutComponent from "../Components/layout/quote/QuoteLayoutComponent";


const getStaticData = (state) => state.devtoolLayoutReducers.staticData;
const getViewport = (state) => state.devtoolViewportReducers.viewport;

const mapStateToProps = createSelector(
    [getStaticData, getViewport],
    (staticData, viewport) => {

        const [quoteCentral = {}, sportList = {}, sportListMobile = {}] = staticData.subItemList || [];

        return {
            viewport,
            quoteCentral,
            sportList,
            sportListMobile
        };
    });

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteLayoutComponent);