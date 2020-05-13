export const chooseChannelList = (result) => {
    return result.filter(item => {
        if(item.channel === "URL") return item;
    });
};

export const updateStatusDropDown = (channelData, url) => {

    return channelData.map(item => {
            return item.url === url ? {...item, selected: !item.selected} : {...item, selected: false};
        }
    );
};

export const updateStatusSubItem = (channelData, url, code) => {

    return channelData.map(item => {
            return item.url === url ?
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