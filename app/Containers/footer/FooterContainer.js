import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import {FooterComponent} from "../../Components/footer/FooterComponent";
import {showFooterToggle} from "../../Core/Actions/FooterActions";


const getFooterContent = (state) => state.footerReducer.footerContent;
const getHideFooter = (state) => state.footerReducer.hideFooter;


const mapStateToProps = createSelector (
    [getFooterContent, getHideFooter],
    (footerContent, hideFooter, screenSize) => {

        const {socialList = [], sectionList = []} = footerContent;

        return {
            footerSectionList : sectionList,
            socialList,
            hideFooter
    };
    }
);

const mapDispatchToProps = (dispatch) => {
    return {
        showFooterToggle: () => {
            dispatch(showFooterToggle())
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(FooterComponent);
