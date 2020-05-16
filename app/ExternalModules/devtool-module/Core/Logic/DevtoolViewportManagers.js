import {createLogic} from "redux-logic";
import "babel-polyfill";
import {giveViewport} from "../Utils/SidebarUtils";
import {storedViewportData} from "../Actions/ViewportActions";
import {INIT_VIEWPORT_DEVTOOL} from "../Constants/ViewportConstants";


const viewportManager = createLogic({
    type: [INIT_VIEWPORT_DEVTOOL],

    process({action, getState}, dispatch, done) {

        try {

            const {resize = 0} =  action;

            if (resize !== 0) {

                let viewport = giveViewport(resize);

                dispatch(storedViewportData(viewport));

            } else {
                console.log("resize a ZERO!");
            }

        } catch (error) {
            console.log("Generic error on Resize Manager!", error);
        }

        done();
    }
});

export const DevtoolViewportManagers = [viewportManager];
