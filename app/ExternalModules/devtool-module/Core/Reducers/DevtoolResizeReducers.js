import createReducer from "../../../../Utils/CreateReducerUtils"


const storedResizeView = (draft, action) => {
    draft.screenSize = action.screenSize;
};


const initState = {
    screenSize: 0,
};

export default createReducer({
    ON_RESIZE_EVENT: storedResizeView,
}, initState);