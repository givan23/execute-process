import {
    INIT_SIDEBAR_DEVTOOL,
    STORED_CHANNEL_DATA,
    STORED_NEW_CHANNEL_DATA,
    TOGGLE_ITEM,
    TOGGLE_SUB_ITEM
} from "../Constants/SidebarConstants";

//INIT
export const initSidebarDevtool = () => {
    return {
        type: INIT_SIDEBAR_DEVTOOL,
    }
};

export const storedChannelData = (result) => {
    return {
        type: STORED_CHANNEL_DATA,
        result
    }
};

export const storedNewChannelData = (newResult) => {
    return {
        type: STORED_NEW_CHANNEL_DATA,
        newResult
    }
};

//MANAGEMENT BARS
export const toggleItem = (url) => {

    return {
        type: TOGGLE_ITEM,
        url
    }
};

export const toggleSubItem = (url,code) => {
    return {
        type: TOGGLE_SUB_ITEM,
        url,
        code
    }
};