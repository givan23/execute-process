import {getViewportByResizeAndObj} from "../../ExternalModules/devtool-module/Core/Utils/ViewportUtils";

export let isShow = (obj, resize) => {

    let viewport = getViewportByResizeAndObj(resize, obj);

    return !!(obj.status && obj.viewport === viewport);
};