import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import FooterLayoutComponent from "../Components/layout/footer/FooterLayoutComponent";

const getStaticDataFooter = (state) => state.footerStaticReducers.staticData;
const getViewport = (state) => state.devtoolViewportReducers.viewport;

const mapStateToProps = createSelector (
    [getStaticDataFooter, getViewport],
    (staticData, viewport) => {

        console.log("data static footer: ", staticData);
        console.log("viewport footer: ", viewport);

        return {
        };
    }
);

const mapDispatchToProps = (dispatch) => {
    return {
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(FooterLayoutComponent);