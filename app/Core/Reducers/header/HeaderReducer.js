import createReducer from "../../../Utils/CreateReducerUtils";

const storedHeaderDetail = (draft, action) => {
    const {headerContent = {}} = action.result;

    draft.headerContent = headerContent;
};

const initState = {
    headerContent: {},
};

export default createReducer({
    STORED_HEADER_DETAIL: storedHeaderDetail,
}, initState);