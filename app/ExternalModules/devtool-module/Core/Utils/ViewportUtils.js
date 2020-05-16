
// filter viewport by resize and with obj.
export const getViewportByResizeAndObj = (viewport, obj) => {

    return (viewport === "desktop" && obj.viewport !== "responsive" || viewport === undefined) ? "desktop"
        : (viewport === "desktop" && obj.viewport === "responsive" || viewport === "mobile" && obj.viewport === "responsive") ? "responsive"
            : "mobile";
};

export const giveViewport = (resize) => {
    return resize > 760 ? "desktop" : "mobile";
};