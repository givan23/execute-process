import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import LandingLayoutComponent from "../Components/layout/landing/LandingLayoutComponent";
import {initSidebarDevtool} from "../../ExternalModules/devtool-module/Core/Actions/SidebarActions";


const getSubItemData = (state) => state.devtoolLayoutReducers.subItemData;
const getScreenSize = (state) => state.devtoolResizeReducers.screenSize;


class LandingLayout extends React.Component {

    componentDidMount() {
        this.props.initSidebarDevtool();

    }

    render() {
        return <LandingLayoutComponent {...this.props} />
    }
}

const mapStateToProps = createSelector(
    [getSubItemData,getScreenSize],
    (subItemData,screenSize) => {

        const [landingCentral = {}, sportList = {}, sportListMobile = {} ] = subItemData.subItemList || [];

        return {
            screenSize,
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

export default connect(mapStateToProps, mapDispatchToProps)(LandingLayout);

