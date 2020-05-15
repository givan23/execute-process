import {onResizeEvent} from "../ExecuteProcess/Core/Actions/ResizeScreenActions";

const onResizeWindow = (store) => {
    window.addEventListener('resize', () =>
        store.dispatch(onResizeEvent(window.innerWidth)
        ), false);
};

export const ListenerUtils = (store) => {
    onResizeWindow(store);
};