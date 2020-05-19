import createReducer from "../../../../Utils/CreateReducerUtils"


const storedSubItemHeaderData = (draft, action) => {
    draft.staticData = action.filterResult;
};


const initState = {
    staticData: {}
};

export default createReducer({
    STORED_SUB_ITEM_HEADER_DATA: storedSubItemHeaderData,
}, initState);