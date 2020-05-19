import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import HeaderLayoutComponent from "../Components/layout/header/HeaderLayoutComponent";


const getStaticDataHeader = (state) => state.headerStaticReducers.staticData;
const getViewport = (state) => state.devtoolViewportReducers.viewport;

const mapStateToProps = createSelector (
    [getStaticDataHeader, getViewport],
    (staticData, viewport) => {

console.log("data static header: ", staticData);
console.log("viewport header: ", viewport);

        return {

        };
    });

const mapDispatchToProps = dispatch => {

    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLayoutComponent);