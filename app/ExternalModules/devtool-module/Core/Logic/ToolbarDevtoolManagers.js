import {createLogic} from "redux-logic";
import {
    DYNAMIC_BASE_URL,
    DYNAMIC_CHANNEL,
    GAME_CHANNEL,
    ON_CLICK_TOOL,
    STATIC_CHANNEL,
    THEME_CHANNEL
} from "../Constants/SidebarConstants";
import {goToPath} from "../Utils/SidebarUtils";
import {onChannelDevDetail} from "../Actions/SidebarActions";


const devtoolToolbarManager = createLogic({
    type: [ON_CLICK_TOOL],

    process({action, getState}, dispatch, done) {

        try {
            const {btnCode = "STATIC"} = action;

               let channelStatus =  {
                    [STATIC_CHANNEL]: () => dispatch(onChannelDevDetail(btnCode)),
                    [DYNAMIC_CHANNEL]: () => goToPath(DYNAMIC_BASE_URL, ""),
                    [THEME_CHANNEL]: () => dispatch(onChannelDevDetail(btnCode)),
                    [GAME_CHANNEL]: () => dispatch(onChannelDevDetail(btnCode))
                };

                console.log(channelStatus[btnCode]());


        } catch (error) {
            console.log("generic exception in ManagementBarManages ", error);
        }
        done();
    }
});

export const DevtoolToolbarManagers = [devtoolToolbarManager];

