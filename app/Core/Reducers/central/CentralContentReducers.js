import createReducer from "../../../Utils/CreateReducerUtils"


const storedCentralDetail = (draft, action) => {
    const {centralContent = {}} = action.result;

    draft.centralContent = centralContent;
};

const onResizeEvent = (draft, action) => {

    draft.screenSize = action.screenSize;
};


const initState = {
    centralContent: {},
    screenSize: window.innerWidth,
};

export default createReducer({
    STORED_CENTRAL_DETAIL: storedCentralDetail,
    ON_RESIZE_EVENT: onResizeEvent,
}, initState);