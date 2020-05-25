import {createLogic} from "redux-logic";
import "babel-polyfill";
import {INIT_BAR_SUB_ITEMS, TOGGLE_ITEM, TOGGLE_SUB_ITEM} from "../Constants/SidebarConstants";
import {
    getThemeFromThemeList,
    updateStatusThemeDropDown,
    updateStatusThemeSubItem
} from "../Utils/SidebarUtils";
import {storedChannelThemeItem, storedTheme} from "../Actions/ThemeDevtoolActions";
import {GENERIC_ERROR} from "../Constants/ErrorsConstants";


const themeDevtoolManager = createLogic({
    type: [INIT_BAR_SUB_ITEMS, TOGGLE_ITEM, TOGGLE_SUB_ITEM],

    process({action, getState}, dispatch, done) {

        try {
            const {channelThemeData = []} = getState().themeDevtoolReducers;
            const {route = "/", code = 2} = action;

            if (channelThemeData && action.type === TOGGLE_ITEM) {

                //go devtool
                const channelThemeItem = updateStatusThemeDropDown(channelThemeData, route);
                dispatch(storedChannelThemeItem(channelThemeItem || []));

            }
            if (channelThemeData && action.type === TOGGLE_SUB_ITEM || channelThemeData && action.type === INIT_BAR_SUB_ITEMS) {

                // go devtool
                const updatedSubItemStatus = updateStatusThemeSubItem(channelThemeData, route, code);
                const theme = getThemeFromThemeList(updatedSubItemStatus);

                dispatch(storedTheme(theme || ""));
                dispatch(storedChannelThemeItem(updatedSubItemStatus || []));

            }

        } catch (error) {
            console.warn(GENERIC_ERROR, error);
        }

        done();
    }
});

export const ThemeDevtoolManagers = [themeDevtoolManager];