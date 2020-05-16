import {createLogic} from "redux-logic";
import "babel-polyfill";
import {NETWORK_CALL_ERROR, RESPONSE_CODE_SUCCESS} from "../../../../Core/Costants/NetworkConstants";
import {DevtoolSettings} from "../../../../ExecuteProcess/Settings/DevtoolSettings";
import {chooseChannelList} from "../Utils/SidebarUtils";
import {initBarSubItems, storedChannelData} from "../Actions/SidebarActions";
import {INIT_SIDEBAR_DEVTOOL} from "../Constants/SidebarConstants";



const sidebarManager = createLogic({
    type: [INIT_SIDEBAR_DEVTOOL],

    process({action, getState}, dispatch, done) {

        try {

            const {code, result = {}} = DevtoolSettings;

            if (code === RESPONSE_CODE_SUCCESS) {

                let channelData = chooseChannelList(result);
                dispatch(storedChannelData(channelData[0].list || []));

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
