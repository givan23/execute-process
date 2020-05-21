import {
    INIT_BAR_SUB_ITEMS,
    INIT_SIDEBAR_DEVTOOL,
    STORED_CHANNEL_DATA,
    STORED_NEW_CHANNEL_DATA,
    STORED_SUB_ITEM_FILTER_DATA,
    STORED_SUB_ITEM_FOOTER_DATA,
    STORED_SUB_ITEM_HEADER_DATA,
    TOGGLE_CLOSE_FULL_SIDEBAR,
    TOGGLE_CLOSE_SIDEBAR,
    TOGGLE_ITEM,
    TOGGLE_SUB_ITEM
} from "../Constants/SidebarConstants";
import {STORED_THEME_DATA} from "../Constants/ThemeDevtoolConstants";
import {STORED_GAME_DATA} from "../Constants/GameDevtoolConstats";

//INIT
export const initSidebarDevtool = () => {
    return {
        type: INIT_SIDEBAR_DEVTOOL,
    }
};


export const initBarSubItems = () => {
    return {
        type: INIT_BAR_SUB_ITEMS,
    }
};


export const storedChannelData = (result, btnCode) => {
    return {
        type: STORED_CHANNEL_DATA,
        result,
        btnCode
    }
};

export const storedThemeData = (result, btnCode) => {
    return {
        type: STORED_THEME_DATA,
        result,
        btnCode
    }
};

export const storedGameData = (result, btnCode) => {
    return {
        type: STORED_GAME_DATA,
        result,
        btnCode
    }
};

export const toggleCloseSidebar = () => {
    return {
        type: TOGGLE_CLOSE_SIDEBAR,
    }
};

export const toggleCloseFullSidebar = () => {
    return {
        type: TOGGLE_CLOSE_FULL_SIDEBAR,
    }
};




//MANAGEMENT ITEM BAR
export const toggleItem = (route) => {
    return {
        type: TOGGLE_ITEM,
        route
    }
};

export const toggleSubItem = (route, code) => {
    return {
        type: TOGGLE_SUB_ITEM,
        route,
        code
    }
};

export const storedNewChannelData = (newResult) => {
    return {
        type: STORED_NEW_CHANNEL_DATA,
        newResult
    }
};

export const storedSubItemFilterData = (filterResult) => {
    return {
        type: STORED_SUB_ITEM_FILTER_DATA,
        filterResult
    }
};

export const storedSubItemHeaderData = (filterResult) => {
    return {
        type: STORED_SUB_ITEM_HEADER_DATA,
        filterResult
    }
};

export const storedSubItemFooterData = (filterResult) => {
    return {
        type: STORED_SUB_ITEM_FOOTER_DATA,
        filterResult
    }
};
