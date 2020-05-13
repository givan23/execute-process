import createReducer from "../../Utils/CreateReducerUtils";

const storedEditorialContext = (draft, action) => {
    draft.editorialContext = action.result;
};

const initState = {
    editorialContext: {},
};

export default createReducer({
    STORED_EDITORIAL_CONTEXT: storedEditorialContext,
}, initState);