import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import {initSidebarDevtool, onClickTool, toggleItem, toggleSubItem} from "../Core/Actions/SidebarActions";
import SideBarComponent from "../Components/layout/SideBarComponent";


const getChannelData = (state) => state.devtoolSidebarReducers.channelData;
const getToolBarData = (state) => state.devtoolSidebarReducers.toolBarData;
const getViewport = (state) => state.devtoolViewportReducers.viewport;

const mapStateToProps = createSelector(
    [getChannelData, getToolBarData, getViewport],
    (channelData, toolBarData, viewport) => {

        const {buttonList = []} = toolBarData;

        return {
            viewport,
            channelData,
            buttonList

        };
    });

const mapDispatchToProps = dispatch => {

    return {
        initSidebarDevtool: () => {
            dispatch(initSidebarDevtool())
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

export default connect(mapStateToProps, mapDispatchToProps)(SideBarComponent);