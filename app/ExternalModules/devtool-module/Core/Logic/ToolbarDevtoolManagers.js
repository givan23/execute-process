import {createLogic} from "redux-logic";
import {DYNAMIC_BASE_URL, ON_CLICK_TOOL} from "../Constants/SidebarConstants";
import {goToPath} from "../Utils/SidebarUtils";


const devtoolToolbarManager = createLogic({
    type: [ON_CLICK_TOOL],

    process({action, getState}, dispatch, done) {

        try {
            const {btnCode = 0} = action;

            if (btnCode !== 0) {

                if (btnCode === 1) {

                    goToPath(DYNAMIC_BASE_URL, "");

                } else if (btnCode === 2) {

                    console.log("click theme btn");

                }

            } else return console.log("error onClick toolbar data!");


        } catch (error) {
            console.log("generic exception in ManagementBarManages ", error);
        }

        done();
    }
});

export const DevtoolToolbarManagers = [devtoolToolbarManager];

