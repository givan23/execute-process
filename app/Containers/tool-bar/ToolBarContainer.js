import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import ToolBarComponent from "../../Components/tool-bar/ToolBarComponent";
import editorialContextReducer from "../../Core/Reducers/EditorialContextReducer";


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

export default connect(mapStateToProps, mapDispatchToProps)(ToolBarComponent);

