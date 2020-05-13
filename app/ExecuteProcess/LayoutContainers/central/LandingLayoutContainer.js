import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import LandingLayoutComponent from "../../LayoutComponents/central/layout/landing/LandingLayoutComponent";

const getChannelData = (state) => state.initSidebarReducers.channelData;

const mapStateToProps = createSelector(
    [getChannelData],
    (channelData) => {
console.log(channelData);
        return {
            channelData
        };
    });

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingLayoutComponent);