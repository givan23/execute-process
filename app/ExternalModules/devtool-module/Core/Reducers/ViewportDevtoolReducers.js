import createReducer from "../../../../Utils/CreateReducerUtils"


const storedViewportData = (draft, action) => {
    draft.viewport = action.viewport;
};


const initState = {
    viewport: "desktop",
};

export default createReducer({
    STORED_VIEWPORT_DATA: storedViewportData,
}, initState);