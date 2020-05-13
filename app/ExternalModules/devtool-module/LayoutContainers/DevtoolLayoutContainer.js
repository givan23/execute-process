import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import SideBarComponent from "../LayoutComponents/layout/SideBarComponent";
import {initSidebarDevtool, toggleItem, toggleSubItem} from "../Core/Actions/SidebarActions";


class SidebarContent extends React.Component {

    componentDidMount() {
        this.props.initSidebarDevtool();
    }

    render() {
        return <SideBarComponent {...this.props} />
    }
}

const getChannelData = (state) => state.initSidebarReducers.channelData;

const mapStateToProps = createSelector(
    [getChannelData],
    (channelData) => {

        return {
            channelData
        };
    });

const mapDispatchToProps = dispatch => {

    return {
        initSidebarDevtool: () => {
            dispatch(initSidebarDevtool())
        },
        toggleItem: (url) => {
            dispatch(toggleItem(url))
        },
        toggleSubItem: (url, code) => {
            dispatch(toggleSubItem(url, code))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContent);