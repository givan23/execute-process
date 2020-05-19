import {createLogic} from "redux-logic";
import "babel-polyfill";
import {NETWORK_CALL_ERROR, RESPONSE_CODE_SUCCESS} from "../../../../Core/Costants/NetworkConstants";
import {DevtoolSettings} from "../../../../ExecuteProcess/Settings/DevtoolSettings";
import {filterItemByChannel} from "../Utils/SidebarUtils";
import {initBarSubItems, storedChannelData, storedToolBarData} from "../Actions/SidebarActions";
import {INIT_SIDEBAR_DEVTOOL} from "../Constants/SidebarConstants";



const sidebarManager = createLogic({
    type: [INIT_SIDEBAR_DEVTOOL],

    process({action, getState}, dispatch, done) {

        try {

            const {code, result = {}} = DevtoolSettings;
            const {toolBarDetail = {}, channelList = []} = result;


            if (code === RESPONSE_CODE_SUCCESS) {

                let channelData = filterItemByChannel(channelList);
                dispatch(storedChannelData(channelData[0].list || []));
                dispatch(storedToolBarData(toolBarDetail));
                dispatch(initBarSubItems());


            } else {
                console.log(NETWORK_CALL_ERROR);
            }

        } catch (error) {
            console.log(NETWORK_CALL_ERROR, error);
        }

        done();
    }
});

export const DevtoolSidebarManagers = [sidebarManager];
