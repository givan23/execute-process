import {createLogic} from "redux-logic";
import {TOGGLE_ITEM, TOGGLE_SUB_ITEM} from "../Constants/SidebarConstants";
import {updateStatusDropDown, updateStatusSubItem} from "../Utils/SidebarUtils";
import {storedNewChannelData} from "../Actions/SidebarActions";


const managementBarManager = createLogic({
    type: [TOGGLE_ITEM, TOGGLE_SUB_ITEM],

    process({action, getState}, dispatch, done) {

        try {

            const {channelData = []} = getState().initSidebarReducers;

            if (channelData && action.type === TOGGLE_ITEM) {
                const {url = "landing"} = action;
                let newChannelData = updateStatusDropDown(channelData, url);
                dispatch(storedNewChannelData(newChannelData || []));


            }
            if (channelData && action.type === TOGGLE_SUB_ITEM) {

                const {url = "landing", code = 2} = action;
                let newChannelData = updateStatusSubItem(channelData, url, code);
                dispatch(storedNewChannelData(newChannelData || []));

            }

        } catch (error) {
            console.log("generic exception in ManagementBarManages ", error);
        }

        done();
    }
});

export const ManagementBarManagers = [managementBarManager];

