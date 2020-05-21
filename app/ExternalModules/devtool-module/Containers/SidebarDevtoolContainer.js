import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import {

    toggleCloseFullSidebar,
    toggleCloseSidebar,
    toggleItem,
    toggleSubItem
} from "../Core/Actions/SidebarActions";
import SidebarDevtoolComponent from "../Components/SidebarDevtoolComponent";
import {onClickTool} from "../Core/Actions/ToolbarActions";


const getViewport = (state) => state.viewportDevtoolReducers.viewport;
const getIsClose = (state) => state.sidebarDevtoolReducers.isClose;
const getIsCloseFull = (state) => state.sidebarDevtoolReducers.isCloseFull;
const getChannelData = (state) => state.staticDevtoolReducers.channelData;
const getToolBarData = (state) => state.toolbarDevtoolReducers.toolBarData;
const getBtnCode = (state) => state.toolbarDevtoolReducers.btnCode;
const getTheme = (state) => state.themeDevtoolReducers.theme;
const getChannelThemeData = (state) => state.themeDevtoolReducers.channelThemeData;
const getChannelGameData = (state) => state.gameDevtoolReducers.channelGameData;



const mapStateToProps = createSelector(
    [getIsClose, getIsCloseFull, getChannelData, getToolBarData, getViewport,
              getChannelThemeData, getTheme, getChannelGameData, getBtnCode],
    (isClose, isCloseFull, channelData, toolBarData, viewport,
               channelThemeData, theme, channelGameData, btnCode) => {

        const {buttonList = []} = toolBarData;

        return {
            viewport,
            channelData,
            buttonList,
            isClose,
            isCloseFull,
            channelThemeData,
            channelGameData,
            btnCode,
            theme
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

