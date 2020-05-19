import {createLogic} from "redux-logic";
import {
    FOOTER_ROUTE,
    HEADER_ROUTE,
    INIT_BAR_SUB_ITEMS, LANDING_ROUTE, QUOTE_ROUTE,
    STATIC_BASE_URL,
    TOGGLE_ITEM,
    TOGGLE_SUB_ITEM
} from "../Constants/SidebarConstants";
import {
    filterByExactRoute,
    filterSubItemList, getStatusRoute,
    goToPath,
    updateStatusDropDown,
    updateStatusSubItem
} from "../Utils/SidebarUtils";
import {
    storedNewChannelData,
    storedSubItemFilterData,
    storedSubItemFooterData,
    storedSubItemHeaderData
} from "../Actions/SidebarActions";
import {MINUS_ONE, ZERO} from "../Constants/GenericConstants";


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

                // go devtool
                let updatedSubItemStatus = updateStatusSubItem(channelData, route, code);

                // go layout
                // These filters guarantee the consistency of the data in the specific reducers
                // at the initialization of the application
                const headerFilterData = filterByExactRoute(updatedSubItemStatus, HEADER_ROUTE);
                const footerFilterData = filterByExactRoute(updatedSubItemStatus, FOOTER_ROUTE);
                dispatch(storedSubItemHeaderData(headerFilterData || []));
                dispatch(storedSubItemFooterData(footerFilterData || []));
                dispatch(storedNewChannelData(updatedSubItemStatus || []));

                //allows you to correctly update the status of items other than the header and footer ones
                if(route === HEADER_ROUTE || route === FOOTER_ROUTE){
                    return "";
                } else {
                    let filteredDataByRoute = filterSubItemList(updatedSubItemStatus, route);
                    dispatch(storedSubItemFilterData( filteredDataByRoute || []))
                }
            }

        } catch (error) {
            console.log("generic exception in ManagementBarManages ", error);
        }

        done();
    }
});

export const DevtoolItemBarManagers = [managementItemBarManager];

