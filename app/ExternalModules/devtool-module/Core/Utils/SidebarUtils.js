export const goToPath = (baseUrl, route) => {
    window.location.href = baseUrl + route;
};

// filter for 'channel'
export const chooseChannelList = (channelList) => {
    return channelList.filter(item => {
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





