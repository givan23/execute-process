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
    draft.btnCode = action.btnCode;

};

const storedNewChannelData = (draft, action) => {
    draft.channelData = action.newResult;
};

const storedThemeData = (draft, action) => {
    draft.channelThemeData = action.result;
    draft.btnCode = action.btnCode;

};

const storedGameData = (draft, action) => {
    draft.channelGameData = action.result;
    draft.btnCode = action.btnCode;

};


const initState = {
    isClose: false,
    isCloseFull: false,
    channelData: [],
    channelThemeData: [],
    channelGameData: [],
    toolBarData: {},
    btnCode: "STATIC"
};

export default createReducer({
    TOGGLE_CLOSE_SIDEBAR: toggleCloseSidebar,
    TOGGLE_CLOSE_FULL_SIDEBAR: toggleCloseFullSidebar,
    STORED_CHANNEL_DATA: storedChannelData,
    STORED_NEW_CHANNEL_DATA: storedNewChannelData,
    STORED_TOOL_BAR_DATA: storedToolBarData,
    STORED_THEME_DATA: storedThemeData,
    STORED_GAME_DATA: storedGameData,

}, initState);
