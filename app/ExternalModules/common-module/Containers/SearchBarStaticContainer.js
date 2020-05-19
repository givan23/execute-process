import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import SearchBarLayoutComponent from "../Components/SearchBarLayoutComponent";


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

