import createReducer from "../../../Utils/CreateReducerUtils";

const storedFooterDetail = (draft, action) => {
    const {footerContent = {}} = action.result;

    draft.footerContent = footerContent;
};


const showFooterToggle = (draft, action) => {
    draft.hideFooter = !draft.hideFooter;
};


const initState = {
    footerContent: {},
    hideFooter: false,
};

export default createReducer({
    STORED_FOOTER_DETAIL: storedFooterDetail,
    SHOW_FOOTER_TOGGLE: showFooterToggle
}, initState);