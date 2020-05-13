import createReducer from "../../../Utils/CreateReducerUtils";

const storedToolBarDetail = (draft, action) => {
    const {toolBarContent = {}} = action.result;

    draft.toolBarContent = toolBarContent;
};

const initState = {
    toolBarContent: {},
};

export default createReducer({
    STORED_TOOL_BAR_DETAIL: storedToolBarDetail,
}, initState);