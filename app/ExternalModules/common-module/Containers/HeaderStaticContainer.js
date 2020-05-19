import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import HeaderStaticComponent from "../Components/layout/header/HeaderStaticComponent";


const getStaticDataHeader = (state) => state.headerStaticReducers.staticData;
const getViewport = (state) => state.devtoolViewportReducers.viewport;

const mapStateToProps = createSelector (
    [getStaticDataHeader, getViewport],
    (staticData, viewport) => {
        const [header = {}] = staticData.subItemList || [];

        return {
            viewport,
            header

        };
    });

const mapDispatchToProps = dispatch => {

    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderStaticComponent);