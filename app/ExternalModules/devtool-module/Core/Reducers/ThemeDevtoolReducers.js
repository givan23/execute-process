import createReducer from "../../../../Utils/CreateReducerUtils"


const storedThemeData = (draft, action) => {
    draft.channelThemeData = action.result;
};

const storedChannelThemeItem = (draft, action) => {
    draft.channelThemeData = action.newResult;
};


const storedTheme = (draft, action) => {
    draft.theme = action.theme;
};


const initState = {
    channelThemeData: [],
    theme: ""
};

export default createReducer({

    STORED_THEME_DATA: storedThemeData,
    STORED_CHANNEL_THEME_ITEM: storedChannelThemeItem,
    STORED_THEME: storedTheme

}, initState);
