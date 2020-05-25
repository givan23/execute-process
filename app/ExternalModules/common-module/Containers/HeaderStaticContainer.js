import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import HeaderStaticComponent from "../Components/HeaderStaticComponent";


const getStaticDataHeader = (state) => state.headerStaticReducers.staticData;
const getViewport = (state) => state.viewportDevtoolReducers.viewport;

const mapStateToProps = createSelector (
    [getStaticDataHeader, getViewport],
    (staticData, viewport) => {

        const {subItemList = []} = staticData;
        //todo gestire NODE_TYPE
        const NODE_TYPE = "ui-it";

        return {
            subItemList,
            viewport,
            NODE_TYPE

        };
    });

const mapDispatchToProps = dispatch => {

    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderStaticComponent);