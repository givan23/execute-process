import {STORED_CHANNEL_THEME_ITEM, STORED_THEME} from "../Constants/ThemeDevtoolConstants";


export const storedTheme = (theme) => {
    return {
        type: STORED_THEME,
        theme
    }
};

export const storedChannelThemeItem = (newResult) => {
    return {
        type: STORED_CHANNEL_THEME_ITEM,
        newResult
    }
};
