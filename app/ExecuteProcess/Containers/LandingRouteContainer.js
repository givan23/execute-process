import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import LandingLayoutComponent from "../Components/layout/landing/LandingLayoutComponent";
import {initSidebarDevtool} from "../../ExternalModules/devtool-module/Core/Actions/SidebarActions";


const getStaticData = (state) => state.devtoolLayoutReducers.staticData;
const getViewport = (state) => state.devtoolViewportReducers.viewport;

const mapStateToProps = createSelector(
    [getStaticData, getViewport],
    (staticData, viewport) => {

        const [landingCentral = {}, sportList = {}, sportListMobile = {}] = staticData.subItemList || [];

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

