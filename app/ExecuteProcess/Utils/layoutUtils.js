import {getViewportByResizeAndObj} from "../../ExternalModules/devtool-module/Core/Utils/ViewportUtils";

//allow the on or off of snippet in layout.
export let isShow = (obj, resize) => {

    let viewport = getViewportByResizeAndObj(resize, obj);

    return !!(obj.status && obj.viewport === viewport);
};