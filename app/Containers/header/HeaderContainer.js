import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import {HeaderComponent} from "../../Components/header/HeaderComponent";


const getHeaderContent = (state) => state.headerReducer.headerContent;

const mapStateToProps = createSelector (
    [getHeaderContent],
    (headerContent) => {
        const { headerItem = {}, navBarItems = {} } = headerContent;

        return {
            headerItem,
            navBarItems
        };
    });

const mapDispatchToProps = dispatch => {

    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);

