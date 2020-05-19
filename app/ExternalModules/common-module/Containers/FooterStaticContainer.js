import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import FooterStaticComponent from "../Components/FooterStaticComponent";


const getStaticDataFooter = (state) => state.footerStaticReducers.staticData;
const getViewport = (state) => state.viewportDevtoolReducers.viewport;

const mapStateToProps = createSelector (
    [getStaticDataFooter, getViewport],
    (staticData, viewport) => {
        const [footer = {}] = staticData.subItemList || [];

        return {
            viewport,
            footer
        };
    }
);

const mapDispatchToProps = (dispatch) => {
    return {
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(FooterStaticComponent);