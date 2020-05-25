import {createLogic} from "redux-logic";
import "babel-polyfill";
import {initBarSubItems, initSidebarDevtool} from "../Actions/SidebarActions";
import {INIT_DEVTOOL} from "../Constants/InitDevtoolConstants";
import {GENERIC_ERROR} from "../Constants/ErrorsConstants";


const initManager = createLogic({
    type: [INIT_DEVTOOL],

    process({action, getState}, dispatch, done) {

        try {

            dispatch(initSidebarDevtool());
            dispatch(initBarSubItems());

        } catch (error) {
            console.warn(GENERIC_ERROR, error);
        }

        done();
    }
});

export const InitDevtoolManagers = [initManager];
