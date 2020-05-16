import {createLogic} from "redux-logic";
import {INIT_BAR_SUB_ITEMS, STATIC_BASE_URL, TOGGLE_ITEM, TOGGLE_SUB_ITEM} from "../Constants/SidebarConstants";
import {
    filterSubItemList,
    goToPath,
    updateStatusDropDown,
    updateStatusSubItem
} from "../Utils/SidebarUtils";
import {storedNewChannelData, storedSubItemFilterData} from "../Actions/SidebarActions";


const managementItemBarManager = createLogic({
    type: [INIT_BAR_SUB_ITEMS, TOGGLE_ITEM, TOGGLE_SUB_ITEM],

    process({action, getState}, dispatch, done) {

        try {

            const {channelData = []} = getState().devtoolSidebarReducers;

            if (channelData && action.type === TOGGLE_ITEM) {

                const {route = "/"} = action;

                //change path
                goToPath(STATIC_BASE_URL, route);

                //go devtool
                let newChannelData = updateStatusDropDown(channelData, route);
                dispatch(storedNewChannelData(newChannelData || []));

            }

            if (channelData && action.type === TOGGLE_SUB_ITEM || channelData && action.type === INIT_BAR_SUB_ITEMS) {

                const {route = "/", code = 2} = action;

                //go devtool
                let updatedSubItemStatus = updateStatusSubItem(channelData, route, code);
                dispatch(storedNewChannelData(updatedSubItemStatus || []));

                //go layout
                let filteredDataByChannel = filterSubItemList(updatedSubItemStatus, route);
                dispatch(storedSubItemFilterData(filteredDataByChannel || []));

            }

        } catch (error) {
            console.log("generic exception in ManagementBarManages ", error);
        }

        done();
    }
});

export const DevtoolItemBarManagers = [managementItemBarManager];

