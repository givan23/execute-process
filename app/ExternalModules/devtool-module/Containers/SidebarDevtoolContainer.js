import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import {
    onClickTool,
    toggleCloseFullSidebar,
    toggleCloseSidebar,
    toggleItem,
    toggleSubItem
} from "../Core/Actions/SidebarActions";
import SidebarDevtoolComponent from "../Components/SidebarDevtoolComponent";

const getIsClose = (state) => state.sidebarDevtoolReducers.isClose;
const getIsCloseFull = (state) => state.sidebarDevtoolReducers.isCloseFull;
const getChannelData = (state) => state.sidebarDevtoolReducers.channelData;
const getToolBarData = (state) => state.sidebarDevtoolReducers.toolBarData;
const getViewport = (state) => state.viewportDevtoolReducers.viewport;

const mapStateToProps = createSelector(
    [getIsClose, getIsCloseFull, getChannelData, getToolBarData, getViewport],
    (isClose, isCloseFull, channelData, toolBarData, viewport) => {

        const {buttonList = []} = toolBarData;

        return {
            viewport,
            channelData,
            buttonList,
            isClose,
            isCloseFull

        };
    });

const mapDispatchToProps = dispatch => {

    return {
        toggleCloseSidebar: () => {
            dispatch(toggleCloseSidebar())
        },
        toggleCloseFullSidebar: () => {
            dispatch(toggleCloseFullSidebar())
        },
        onClickTool: (btnCode) => {
            dispatch(onClickTool(btnCode))
        },
        toggleItem: (route) => {
            dispatch(toggleItem(route))
        },

        toggleSubItem: (route, code) => {
            dispatch(toggleSubItem(route, code))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarDevtoolComponent);