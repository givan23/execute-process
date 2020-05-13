import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import QuoteLayoutComponent from "../../LayoutComponents/central/layout/quote/QuoteLayoutComponent";


const mapStateToProps = createSelector (
    [],
    () => {

        return {

        };
    }
);

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteLayoutComponent);