import createReducer from "../../../../Utils/CreateReducerUtils"


const storedToolBarData = (draft, action) => {
    draft.toolBarData = action.toolBarData;
};

const storedChannelData = (draft, action) => {
    draft.btnCode = action.btnCode;
};

const storedGameData = (draft, action) => {
    draft.btnCode = action.btnCode;
};

const storedThemeData = (draft, action) => {
    draft.btnCode = action.btnCode;
};


const initState = {
    toolBarData: {},
    btnCode: "STATIC"
};

export default createReducer({
    STORED_TOOL_BAR_DATA: storedToolBarData,
    STORED_CHANNEL_DATA: storedChannelData,
    STORED_GAME_DATA: storedGameData,
    STORED_THEME_DATA: storedThemeData
}, initState);
