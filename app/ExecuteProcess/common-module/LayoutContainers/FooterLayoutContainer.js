import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import FooterLayoutComponent from "../LayoutComponents/footer/layout/FooterLayoutComponent";

const mapStateToProps = createSelector (
    [],
    () => {
        return {
        };
    }
);

const mapDispatchToProps = (dispatch) => {
    return {
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(FooterLayoutComponent);