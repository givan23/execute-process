import {ON_CHANNEL_DEV_DETAIL, ON_CLICK_TOOL, STORED_TOOL_BAR_DATA} from "../Constants/SidebarConstants";

export const storedToolBarData = (toolBarData) => {
    return {
        type: STORED_TOOL_BAR_DATA,
        toolBarData
    }
};

export const onClickTool = (btnCode) => {
    return {
        type: ON_CLICK_TOOL,
        btnCode
    }
};

export const onChannelDevDetail = (btnCode) => {
    return {
        type: ON_CHANNEL_DEV_DETAIL,
        btnCode
    }
};