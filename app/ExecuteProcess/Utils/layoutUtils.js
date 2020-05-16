import {getViewportByResizeAndObj} from "../../ExternalModules/devtool-module/Core/Utils/SidebarUtils";

export let isShow = (obj, resize) => {

    let viewport = getViewportByResizeAndObj(resize, obj);
    console.log("viewport: ", viewport);

    return !!(obj.status && obj.viewport === viewport);
};