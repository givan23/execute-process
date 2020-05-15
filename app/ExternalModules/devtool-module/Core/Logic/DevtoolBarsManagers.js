import {createLogic} from "redux-logic";
import {STATIC_BASE_URL, TOGGLE_ITEM, TOGGLE_SUB_ITEM} from "../Constants/SidebarConstants";
import {
    filterSubItemForViewport,
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
                let viewport = "desktop";

                //go devtool
                let updatedSubItemStatus = updateStatusSubItem(channelData, route, code, viewport);
                let filterByViewport = filterSubItemForViewport(updatedSubItemStatus, route, viewport);
                dispatch(storedNewChannelData(filterByViewport || []));


                //go layout
                let filteredDataByChannel = filterSubItemList(filterByViewport, route);
                dispatch(storedSubItemFilterData(filteredDataByChannel || []));

            }

        } catch (error) {
            console.log("generic exception in ManagementBarManages ", error);
        }

        done();
    }
});

export const DevtoolBarsManagers = [managementBarManager];

