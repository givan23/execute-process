import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import LandingLayoutComponent from "../Components/layout/landing/LandingLayoutComponent";


const getSubItemData = (state) => state.devtoolLayoutReducers.subItemData;

const mapStateToProps = createSelector(
    [getSubItemData],
    (subItemData) => {

        const {subItemList = []} = subItemData;

        const [landingCentralStatus = {}, sportListStatus = {}] = subItemList;


        return {
            landingCentralStatus,
            sportListStatus
        };
    });

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingLayoutComponent);

