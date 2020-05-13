import createReducer from "../../../../../Utils/CreateReducerUtils"


const storedChannelData = (draft, action) => {
    draft.channelData = action.result;
};

const storedNewChannelData = (draft, action) => {
    draft.channelData = action.newResult;
};



const initState = {
    channelData: [],
};

export default createReducer({
    STORED_CHANNEL_DATA: storedChannelData,
    STORED_NEW_CHANNEL_DATA: storedNewChannelData
}, initState);
