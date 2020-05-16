import {createLogic} from "redux-logic";
import "babel-polyfill";
import {initBarSubItems, initSidebarDevtool} from "../Actions/SidebarActions";
import {INIT_DEVTOOL} from "../Constants/InitDevtoolConstants";


const initManager = createLogic({
    type: [INIT_DEVTOOL],

    process({action, getState}, dispatch, done) {

        try {

            dispatch(initSidebarDevtool());
            dispatch(initBarSubItems());

        } catch (error) {
            console.log("Generic error, in Init Manager", error);
        }

        done();
    }
});

export const InitDevtoolManagers = [initManager];
