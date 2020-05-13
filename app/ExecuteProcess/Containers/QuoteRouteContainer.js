import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import QuoteLayoutComponent from "../Components/layout/quote/QuoteLayoutComponent";


const getSubItemData = (state) => state.devtoolLayoutReducers.subItemData;

const mapStateToProps = createSelector(
    [getSubItemData],
    (subItemData) => {

        return {
            snippetData: subItemData
        };
    });

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteLayoutComponent);