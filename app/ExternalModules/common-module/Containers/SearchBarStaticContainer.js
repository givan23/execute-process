import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import SearchBarLayoutComponent from "../Components/layout/search-bar/SearchBarLayoutComponent";


const mapStateToProps = createSelector (
    [],
    () => {
        return {

        };
    });

const mapDispatchToProps = dispatch => {

    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarLayoutComponent);

