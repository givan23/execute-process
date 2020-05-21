
export const goToPath = (baseUrl, route) => {
    return route === "/header" || route === "/footer"? "" : window.location.href = baseUrl + route;
};

export const checkRoutes = (route) => {
    return route !== "/theme";
};

// filter for 'channel'
export const filterItemByChannel = (channelList, channel) => {
    return channelList.filter(item => {
        if (item.channel === channel) return item;
    });
};

//filter for 'route' and returns an list updated of all items and sub-items of all routes.
export const updateStatusDropDown = (channelData, route) => {

    return channelData.map(item => {
            return item.route === route ? {...item, selected: !item.selected} : {...item, selected: false};
        }
    );
};

//filter for EXACT 'route' and sub-item 'code'. Returns a updated items and sub-items list.
export const filterByExactRoute = (data, route) => {
    let filterData = data.filter(item => {return item.route === route });
    return filterData[0]
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

// X THEME
//filter for 'route' and sub-item 'code'. Returns a updated items and sub-items list. on/off functionality.
export const updateStatusThemeSubItem = (channelData, route, code) => {

    return channelData.map(item => {
            return item.route === route ?
                {
                    ...item,
                    subItemList: item.subItemList.map((sub) => {
                        return sub.code === code ?
                            {
                            ...sub,
                            status: !sub.status
                            } : sub.status === true ?
                                {
                                    ...sub,
                                    status: !sub.status
                                } : sub;
                    })
                }
                : item;
        }
    );
};

// find theme from theme list
export const getThemeFromThemeList = (themeList) => {

    const {list = []} = themeList[0] || {};
    const {subItemList = []} = list[0] || {};
console.log("subItemList: ",subItemList);
    let theme = subItemList.filter(theme => {
        return theme.status === true ? theme : null;
    });
    const {subItemTitle = "blue"} = theme[0] || {}
    return subItemTitle;
};




// filter for 'route' selected. Return an item with a sub-items list.
export const filterSubItemList = (newChannelData, route) => {

    let filtered = newChannelData.filter(item => {
        return item.route === route ? item : null
    });
    return filtered[0];
};