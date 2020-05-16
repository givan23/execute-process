import {initViewportDevtool} from "../../ExternalModules/devtool-module/Core/Actions/ViewportActions";

export const initResizeWindow = (store) => {
    window.addEventListener('resize', () =>
        store.dispatch(initViewportDevtool(window.innerWidth)), false);
};