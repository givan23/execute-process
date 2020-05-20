import {createLogic} from "redux-logic";
import "babel-polyfill";
import {NETWORK_CALL_ERROR, RESPONSE_CODE_SUCCESS} from "../../../../Core/Costants/NetworkConstants";
import {DevtoolSettings} from "../../../../ExecuteProcess/Settings/DevtoolSettings";
import {filterItemByChannel, goToPath} from "../Utils/SidebarUtils";
import {
    initBarSubItems,
    onChannelDevDetail,
    storedChannelData, storedGameData,
    storedThemeData,
    storedToolBarData
} from "../Actions/SidebarActions";
import {
    DYNAMIC_BASE_URL,
    DYNAMIC_CHANNEL, GAME_CHANNEL,
    INIT_SIDEBAR_DEVTOOL,
    ON_CHANNEL_DEV_DETAIL,
    STATIC_CHANNEL, THEME_CHANNEL
} from "../Constants/SidebarConstants";



const sidebarManager = createLogic({
    type: [INIT_SIDEBAR_DEVTOOL, ON_CHANNEL_DEV_DETAIL],

    process({action, getState}, dispatch, done) {

        try {

            const {code, result = {}} = DevtoolSettings;
            const {toolBarDetail = {}, channelList = []} = result;
            const {type = "", btnCode = "STATIC"} = action;
            if (code === RESPONSE_CODE_SUCCESS && toolBarDetail && channelList) {

                if(type === INIT_SIDEBAR_DEVTOOL || btnCode === "STATIC" ) {

                    let channelData = filterItemByChannel(channelList, btnCode);
                    console.log("enter in INIT_SIDEBAR_DEVTOOL: ", channelData);

                    dispatch(storedChannelData(channelData[0].list || [], btnCode));
                    dispatch(storedToolBarData(toolBarDetail));
                    dispatch(initBarSubItems());

                } else {

                    let channelData = filterItemByChannel(channelList, btnCode || "");

                    let channelStatus =  {
                        [THEME_CHANNEL]: () => dispatch(storedThemeData(channelData, btnCode)),
                        [GAME_CHANNEL]: () => dispatch(storedGameData(channelData, btnCode))
                    };

                    channelStatus[channelData[0].channel]()

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
