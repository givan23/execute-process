import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import SideBarComponent from "../Components/layout/SideBarComponent";
import {initSidebarDevtool, toggleItem, toggleSubItem} from "../Core/Actions/SidebarActions";


class SidebarContent extends React.Component {

    componentDidMount() {
        this.props.initSidebarDevtool();
    }

    render() {
        return <SideBarComponent {...this.props} />
    }
}

const getChannelData = (state) => state.devtoolSidebarReducers.channelData;
const getScreenSize = (state) => state.devtoolResizeReducers.screenSize;

const mapStateToProps = createSelector(
    [getChannelData,getScreenSize],
    (channelData,screenSize) => {

        return {
            screenSize,
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

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContent);