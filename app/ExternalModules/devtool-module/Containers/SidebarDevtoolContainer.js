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


const getViewport = (state) => state.viewportDevtoolReducers.viewport;
const getIsClose = (state) => state.sidebarDevtoolReducers.isClose;
const getIsCloseFull = (state) => state.sidebarDevtoolReducers.isCloseFull;
const getChannelData = (state) => state.sidebarDevtoolReducers.channelData;
const getToolBarData = (state) => state.sidebarDevtoolReducers.toolBarData;
const getChannelThemeData = (state) => state.sidebarDevtoolReducers.channelThemeData;
const getChannelGameData = (state) => state.sidebarDevtoolReducers.channelGameData;
const getBtnCode = (state) => state.sidebarDevtoolReducers.btnCode;


const mapStateToProps = createSelector(
    [getIsClose, getIsCloseFull, getChannelData, getToolBarData, getViewport,
              getChannelThemeData, getChannelGameData, getBtnCode],
    (isClose, isCloseFull, channelData, toolBarData, viewport,
               channelThemeData, channelGameData, btnCode) => {


        const {buttonList = []} = toolBarData;

        return {
            viewport,
            channelData,
            buttonList,
            isClose,
            isCloseFull,
            channelThemeData,
            channelGameData,
            btnCode

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