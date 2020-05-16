export const goToPath = (baseUrl, route) => {
    window.location.href = baseUrl + route;
};

// filter for 'channel'
export const chooseChannelList = (result) => {
    return result.filter(item => {
        if (item.channel === "URL") return item;
    });
};

//filter for 'route' and returns an list updated of all items and sub-items of all routes.
export const updateStatusDropDown = (channelData, route) => {

    return channelData.map(item => {
            return item.route === route ? {...item, selected: !item.selected} : {...item, selected: false};
        }
    );
};

//filter for 'route' and sub-item 'code'. Returns a updated items and sub-items list.
export const updateStatusSubItem = (channelData, route, code) => {

    return channelData.map(item => {
            return item.route === route ?
                {
                    ...item,
                    subItemList: item.subItemList.map((sub) => {
                        return sub.code === code ? {...sub, status: !sub.status} : sub;
                    })
                }
                : item;
        }
    );
};


// filter for 'route' selected. Return an item with a sub-items list.
export const filterSubItemList = (newChannelData, route) => {

    let filtered = newChannelData.filter(item => {
        return item.route === route ? item : null
    });
    return filtered[0];
};

// filter viewport by resize and with obj.
export const getViewportByResizeAndObj = (viewport, obj) => {

    return (viewport === "desktop" && obj.viewport !== "responsive" || viewport === undefined) ? "desktop"
        : (viewport === "desktop" && obj.viewport === "responsive" || viewport === "mobile" && obj.viewport === "responsive") ? "responsive"
            : "mobile";
};

export const giveViewport = (resize) => {
    return resize > 760 ? "desktop" : "mobile";
};



