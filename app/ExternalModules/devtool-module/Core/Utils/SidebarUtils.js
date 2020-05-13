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

//filter for 'route' and sub item 'code' returns an list updated of all of all items and sub-items of all routes.
export const updateStatusSubItem = (channelData, route, code) => {

    return channelData.map(item => {
            return item.route === route ?
                {
                    ...item,
                    subItemList: item.subItemList.map(sub => {
                        return sub.code === code ? {...sub, status: !sub.status} : sub;
                    })
                }
                : item;
        }
    );
};

// filter for 'route' selected and return a list of items and sub-items of route selected.
export const filterSubItemList = (newChannelData, route) => {

    let filtered = newChannelData.filter(item => {
            return item.route === route ? item : null
        });
    return filtered[0];
};

