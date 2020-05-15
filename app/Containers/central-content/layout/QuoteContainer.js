import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import {QuoteComponent} from "../../../Components/centralContent/layout/QuoteComponent";


const mapStateToProps = createSelector (
    [],
    () => {

        return {
            message: "Quote page"
        };
    }
);

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteComponent);