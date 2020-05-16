import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import LandingLayoutComponent from "../Components/layout/landing/LandingLayoutComponent";
import {initSidebarDevtool} from "../../ExternalModules/devtool-module/Core/Actions/SidebarActions";


const getSubItemData = (state) => state.devtoolLayoutReducers.subItemData;
const getViewport = (state) => state.devtoolViewportReducers.viewport;

const mapStateToProps = createSelector(
    [getSubItemData, getViewport],
    (subItemData, viewport) => {

        const [landingCentral = {}, sportList = {}, sportListMobile = {}] = subItemData.subItemList || [];

        return {
            viewport,
            landingCentral,
            sportList,
            sportListMobile
        };
    });

const mapDispatchToProps = (dispatch) => {
    return {
        initSidebarDevtool: () => {
            dispatch(initSidebarDevtool())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingLayoutComponent);

