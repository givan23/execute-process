import {createLogic} from "redux-logic";
import "babel-polyfill";
import {NETWORK_CALL_ERROR, RESPONSE_CODE_SUCCESS} from "../../../../../Core/Costants/NetworkConstants";
import {DevtoolSettings} from "../../../../Settings/DevtoolSettings";
import {chooseChannelList, updateStatusDropDown} from "../Utils/SidebarUtils";
import {storedChannelData} from "../Actions/SidebarActions";
import {INIT_SIDEBAR_DEVTOOL} from "../Constants/SidebarConstants";


const sidebarManager = createLogic({
    type: [INIT_SIDEBAR_DEVTOOL],

    process({action, getState}, dispatch, done) {

        try {

            const {code, result = {}} = DevtoolSettings;

            if (code === RESPONSE_CODE_SUCCESS) {

                let channelData = chooseChannelList(result);


                    dispatch(storedChannelData(channelData[0].list || []));


            } else {
                console.log(NETWORK_CALL_ERROR);
            }

        } catch (error) {
            console.log(NETWORK_CALL_ERROR, error);
        }

        done();
    }
});

export const SidebarManagers = [sidebarManager];
