import createReducer from "../../../../Utils/CreateReducerUtils"


const toggleCloseSidebar = (draft, action) => {
    draft.isClose = !draft.isClose;
};

const toggleCloseFullSidebar = (draft, action) => {
    draft.isCloseFull = !draft.isCloseFull;
};

const storedToolBarData = (draft, action) => {
    draft.toolBarData = action.toolBarData;
};

const storedChannelData = (draft, action) => {
    draft.channelData = action.result;
};

const storedNewChannelData = (draft, action) => {
    draft.channelData = action.newResult;
};

const initState = {
    isClose: false,
    isCloseFull: false,
    channelData: [],
    toolBarData: {},
};

export default createReducer({
    TOGGLE_CLOSE_SIDEBAR: toggleCloseSidebar,
    TOGGLE_CLOSE_FULL_SIDEBAR: toggleCloseFullSidebar,
    STORED_CHANNEL_DATA: storedChannelData,
    STORED_NEW_CHANNEL_DATA: storedNewChannelData,
    STORED_TOOL_BAR_DATA: storedToolBarData

}, initState);
