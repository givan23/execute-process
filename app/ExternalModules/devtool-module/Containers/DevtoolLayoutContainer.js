import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import {initSidebarDevtool, toggleItem, toggleSubItem} from "../Core/Actions/SidebarActions";
import SideBarComponent from "../Components/layout/SideBarComponent";


const getChannelData = (state) => state.devtoolSidebarReducers.channelData;
const getViewport = (state) => state.devtoolViewportReducers.viewport;

const mapStateToProps = createSelector(
    [getChannelData,getViewport],
    (channelData,viewport) => {

        return {
            viewport,
            channelData

        };
    });

const mapDispatchToProps = dispatch => {

    return {
        initSidebarDevtool: () => {
            dispatch(initSidebarDevtool())
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