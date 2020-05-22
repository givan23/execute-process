
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
//filter for 'route' and returns an list updated of all items and sub-items of all routes.
export const updateStatusThemeDropDown = (channelData, route) => {

    // update item status from click.
    let updateStatusItem = channelData.map(item => {
        return item.route === route ? {...item, selected: !item.selected} : {...item, selected: false};
    });

    // set initial state of the subItem. First item at true and rest at false.
    return updateStatusItem.map((item) => {
            return item.route === route ?
                {
                    ...item,
                    subItemList: item.subItemList.map((sub,i) => {
                        return i === 0 ? {...sub, status: true} : {...sub, status: false};
                    })
                }
                : item;
        }
    );

};

// X THEME
//filter for 'route' and sub-item 'code'. Returns a updated items and sub-items list. on/off functionality.
export const updateStatusThemeSubItem = (channelData, route, code) => {
    //change all sub-items at false status.
    let resetSubItem =  channelData.map(item => {
        return item.route === route ?
            {
                ...item,
                subItemList: item.subItemList.map((sub) => {
                    return {
                        ...sub,
                        status: false
                    }
                })
            }
            : item;
    });
    // update item status from click.
   return resetSubItem.map(item => {
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
// find theme from theme list
export const getThemeFromThemeList = (themeList) => {

    const {subItemList = []} = themeList[0] || {};
    // find the state at true and return the theme.
    const {subItemTitle = ""} = subItemList.filter(theme => {
        return theme.status === true ? theme : null; })[0] || {};
    return subItemTitle;
};




// filter for 'route' selected. Return an item with a sub-items list.
export const filterSubItemList = (newChannelData, route) => {

    let filtered = newChannelData.filter(item => {
        return item.route === route ? item : null
    });
    return filtered[0];
};