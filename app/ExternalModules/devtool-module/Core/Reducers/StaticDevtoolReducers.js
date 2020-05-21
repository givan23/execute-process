import createReducer from "../../../../Utils/CreateReducerUtils"


const storedChannelData = (draft, action) => {
    draft.channelData = action.result;
};

const storedNewChannelData = (draft, action) => {
    draft.channelData = action.newResult;
};

const storedSubItemFilterData = (draft, action) => {
    draft.staticData = action.filterResult;

};


const initState = {
    channelData: [],
    staticData: {},

};

export default createReducer({
    STORED_CHANNEL_DATA: storedChannelData,
    STORED_NEW_CHANNEL_DATA: storedNewChannelData,
    STORED_SUB_ITEM_FILTER_DATA: storedSubItemFilterData
}, initState);