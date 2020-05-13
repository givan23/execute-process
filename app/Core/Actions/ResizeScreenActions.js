import { ON_RESIZE_EVENT } from "../Costants/ResizeConstants";

export const onResizeEvent = (width) => {

    return {
        type: ON_RESIZE_EVENT,
        screenSize: width
    }
};