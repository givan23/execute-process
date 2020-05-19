import createReducer from "../../../Utils/CreateReducerUtils"


const storedCentralDetail = (draft, action) => {
    const {centralContent = {}} = action.result;

    draft.centralContent = centralContent;
};


const initState = {
    centralContent: {},
    screenSize: window.innerWidth,
};

export default createReducer({
    STORED_CENTRAL_DETAIL: storedCentralDetail,
}, initState);