import createReducer from "../../../../Utils/CreateReducerUtils"


const storedSubItemFilterData = (draft, action) => {
    draft.subItemData = action.filterResult;
};


const initState = {
    subItemData: {},
};

export default createReducer({
    STORED_SUB_ITEM_FILTER_DATA: storedSubItemFilterData
}, initState);