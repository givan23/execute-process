import createReducer from "../../../../Utils/CreateReducerUtils"


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
    channelData: [],
    toolBarData: {},

};

export default createReducer({
    STORED_CHANNEL_DATA: storedChannelData,
    STORED_NEW_CHANNEL_DATA: storedNewChannelData,
    STORED_TOOL_BAR_DATA: storedToolBarData
}, initState);
