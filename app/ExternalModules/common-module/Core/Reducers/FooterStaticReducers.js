import createReducer from "../../../../Utils/CreateReducerUtils"


const storedSubItemFooterData = (draft, action) => {
    draft.staticData = action.filterResult;
};


const initState = {
    staticData: {},
};

export default createReducer({
    STORED_SUB_ITEM_FOOTER_DATA: storedSubItemFooterData,
}, initState);