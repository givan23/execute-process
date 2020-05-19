import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import LandingStaticComponent from "../Components/LandingStaticComponent";
import {initSidebarDevtool} from "../../ExternalModules/devtool-module/Core/Actions/SidebarActions";


const getStaticData = (state) => state.staticDevtoolReducers.staticData;
const getViewport = (state) => state.viewportDevtoolReducers.viewport;

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

export default connect(mapStateToProps, mapDispatchToProps)(LandingStaticComponent);

