import createReducer from "../../../../Utils/CreateReducerUtils"


//game
const storedGameData = (draft, action) => {
    draft.channelGameData = action.result;
};


const initState = {
    channelGameData: [],
};

export default createReducer({
    STORED_GAME_DATA: storedGameData,

}, initState);
