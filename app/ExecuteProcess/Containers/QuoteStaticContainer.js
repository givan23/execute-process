import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import QuoteStaticComponent from "../Components/QuoteStaticComponent";


const getStaticData = (state) => state.staticDevtoolReducers.staticData;
const getViewport = (state) => state.viewportDevtoolReducers.viewport;

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

export default connect(mapStateToProps, mapDispatchToProps)(QuoteStaticComponent);