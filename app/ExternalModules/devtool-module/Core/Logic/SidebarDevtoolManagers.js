import {createLogic} from "redux-logic";
import "babel-polyfill";
import {NETWORK_CALL_ERROR, RESPONSE_CODE_SUCCESS} from "../../../../Core/Costants/NetworkConstants";
import {DevtoolSettings} from "../../../../ExecuteProcess/Settings/DevtoolSettings";
import {filterItemByChannel} from "../Utils/SidebarUtils";
import {initBarSubItems, storedChannelData, storedToolBarData} from "../Actions/SidebarActions";
import {INIT_SIDEBAR_DEVTOOL, ON_CHANNEL_DEV_DETAIL} from "../Constants/SidebarConstants";



const sidebarManager = createLogic({
    type: [INIT_SIDEBAR_DEVTOOL, ON_CHANNEL_DEV_DETAIL],

    process({action, getState}, dispatch, done) {

        try {

            const {code, result = {}} = DevtoolSettings;
            const {toolBarDetail = {}, channelList = []} = result;

            if (code === RESPONSE_CODE_SUCCESS && toolBarDetail && channelList) {

                if(action.type === INIT_SIDEBAR_DEVTOOL || action.btnCode === "STATIC" ) {

                    let channelData = filterItemByChannel(channelList, action.btnCode || "STATIC");
                    console.log("enter in INIT_SIDEBAR_DEVTOOL: ", channelData);

                    dispatch(storedChannelData(channelData[0].list || []));
                    dispatch(storedToolBarData(toolBarDetail));
                    dispatch(initBarSubItems());

                } else {

                    let channelData = filterItemByChannel(channelList, action.btnCode || "");
                    console.log("enter in ON_CHANNEL_DEV_DETAIL: ", channelData[0].list);

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
