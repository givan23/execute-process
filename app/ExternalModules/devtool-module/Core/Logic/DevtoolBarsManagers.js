import {createLogic} from "redux-logic";
import {STATIC_BASE_URL, TOGGLE_ITEM, TOGGLE_SUB_ITEM} from "../Constants/SidebarConstants";
import {
    filterSubItemList,
    goToPath,
    updateStatusDropDown,
    updateStatusSubItem
} from "../Utils/SidebarUtils";
import {storedNewChannelData, storedSubItemFilterData} from "../Actions/SidebarActions";


const managementBarManager = createLogic({
    type: [TOGGLE_ITEM, TOGGLE_SUB_ITEM],

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

            if (channelData && action.type === TOGGLE_SUB_ITEM) {

                const {route = "/", code = 2} = action;

                //go devtool
                let updatedSubItemStatus = updateStatusSubItem(channelData, route, code);
                dispatch(storedNewChannelData(updatedSubItemStatus || []));


                //go layout
                let filteredDataByChannel = filterSubItemList(updatedSubItemStatus, route);
                console.log(filteredDataByChannel);
                dispatch(storedSubItemFilterData(filteredDataByChannel || []));

            }

        } catch (error) {
            console.log("generic exception in ManagementBarManages ", error);
        }

        done();
    }
});

export const DevtoolBarsManagers = [managementBarManager];

