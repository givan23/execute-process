import createReducer from "../../../../Utils/CreateReducerUtils"


const toggleCloseSidebar = (draft, action) => {
    draft.isClose = !draft.isClose;
};

const toggleCloseFullSidebar = (draft, action) => {
    draft.isCloseFull = !draft.isCloseFull;

};

const initState = {
    isClose: false,
    isCloseFull: false,

};

export default createReducer({
    TOGGLE_CLOSE_SIDEBAR: toggleCloseSidebar,
    TOGGLE_CLOSE_FULL_SIDEBAR: toggleCloseFullSidebar,

}, initState);
