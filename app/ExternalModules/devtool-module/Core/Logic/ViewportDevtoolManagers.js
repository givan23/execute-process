import {createLogic} from "redux-logic";
import "babel-polyfill";
import {storedViewportData} from "../Actions/ViewportActions";
import {INIT_VIEWPORT_DEVTOOL} from "../Constants/ViewportConstants";
import {giveViewport} from "../Utils/ViewportUtils";
import {GENERIC_ERROR, ERROR_VIEWPORT} from "../Constants/ErrorsConstants";


const viewportManager = createLogic({
    type: [INIT_VIEWPORT_DEVTOOL],

    process({action, getState}, dispatch, done) {

        try {

            const {resize = 0} =  action;

            if (resize !== 0) {

                let viewport = giveViewport(resize);

                dispatch(storedViewportData(viewport));

            } else {
                console.warn(ERROR_VIEWPORT);
            }

        } catch (error) {
            console.warn(GENERIC_ERROR, error);
        }

        done();
    }
});

export const ViewportDevtoolManagers = [viewportManager];
