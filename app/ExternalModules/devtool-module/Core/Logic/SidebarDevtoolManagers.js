import {createLogic} from "redux-logic";
import "babel-polyfill";
import {NETWORK_CALL_ERROR, RESPONSE_CODE_SUCCESS} from "../../../../Core/Costants/NetworkConstants";
import {DevtoolSettings} from "../../../../ExecuteProcess/Settings/DevtoolSettings";
import {filterItemByChannel} from "../Utils/SidebarUtils";
import {
    initBarSubItems,
    storedChannelData,
    storedGameData,
    storedThemeData,

} from "../Actions/SidebarActions";
import {
    GAME_CHANNEL,
    INIT_SIDEBAR_DEVTOOL,
    ON_CHANNEL_DEV_DETAIL, STATIC_CHANNEL,
    THEME_CHANNEL
} from "../Constants/SidebarConstants";
import {storedToolBarData} from "../Actions/ToolbarActions";


const sidebarManager = createLogic({
    type: [INIT_SIDEBAR_DEVTOOL, ON_CHANNEL_DEV_DETAIL],

    process({action, getState}, dispatch, done) {

        try {

            const {code, result = {}} = DevtoolSettings;
            const {toolBarDetail = {}, channelList = []} = result;
            const {type = "", btnCode = "STATIC"} = action;

            if (code === RESPONSE_CODE_SUCCESS && toolBarDetail && channelList) {

                if (type === INIT_SIDEBAR_DEVTOOL) {


                    let channelStaticData = filterItemByChannel(channelList, "STATIC");
                    dispatch(storedChannelData(channelStaticData[0].list || [], btnCode));
                    dispatch(storedToolBarData(toolBarDetail));
                    dispatch(initBarSubItems());
                    let channelThemeData = filterItemByChannel(channelList, "THEME");
                    dispatch(storedThemeData(channelThemeData[0].list, btnCode));
                    let channelGameData = filterItemByChannel(channelList, "GAME");
                    dispatch(storedGameData(channelGameData[0].list, btnCode));

                } else if (type === ON_CHANNEL_DEV_DETAIL) {


                    let channelData = filterItemByChannel(channelList, btnCode || "");

                    let channelStatus = {
                        [STATIC_CHANNEL]: () => dispatch(storedChannelData(channelData[0].list || [], btnCode)),
                        [THEME_CHANNEL]: () => dispatch(storedThemeData(channelData[0].list, btnCode)),
                        [GAME_CHANNEL]: () => dispatch(storedGameData(channelData[0].list, btnCode))
                    };
                    channelStatus[channelData[0].channel]();
                }

            } else {
                console.log("inconsistent data!");
            }

        } catch (error) {
            console.log(NETWORK_CALL_ERROR, error);
        }

        done();
    }
});

export const SidebarDevtoolManagers = [sidebarManager];
