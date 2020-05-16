import {INIT_VIEWPORT_DEVTOOL, STORED_VIEWPORT_DATA} from "../Constants/ViewportConstants";


export const initViewportDevtool = (resize) => {

    return {
        type: INIT_VIEWPORT_DEVTOOL,
        resize

    }
};

export const storedViewportData = (viewport) => {

    return {
        type: STORED_VIEWPORT_DATA,
        viewport
    }
};