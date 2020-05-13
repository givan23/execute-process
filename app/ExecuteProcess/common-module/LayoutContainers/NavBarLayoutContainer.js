import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import NavBarLayoutComponent from "../LayoutComponents/nav-bar/layout/NavBarLayoutComponent";


const getToolBarContent = (state) => state.toolBarReducer.toolBarContent;
const getEditorialContext = (state) => state.editorialContextReducer.editorialContext;

const mapStateToProps = createSelector (
    [getToolBarContent, getEditorialContext],
    (toolBarContent, editorialContext) => {

        return {
            editorialContext
        };
    });

const mapDispatchToProps = dispatch => {

    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarLayoutComponent);

