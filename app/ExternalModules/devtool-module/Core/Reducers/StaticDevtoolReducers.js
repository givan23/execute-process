import createReducer from "../../../../Utils/CreateReducerUtils"


const storedSubItemFilterData = (draft, action) => {
    draft.staticData = action.filterResult;
};


const initState = {
    staticData: {},
};

export default createReducer({
    STORED_SUB_ITEM_FILTER_DATA: storedSubItemFilterData
}, initState);