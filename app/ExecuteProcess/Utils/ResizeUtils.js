import {onResizeEvent} from "../Core/Actions/ResizeScreenActions";

export const onResizeWindow = (store) => {
    window.addEventListener('resize', () =>
        store.dispatch(onResizeEvent(window.innerWidth)), false);
};