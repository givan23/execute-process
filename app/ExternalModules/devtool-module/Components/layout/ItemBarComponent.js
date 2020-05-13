import React from "react";

export const ItemBarComponent = ({channelData = [], toggleItem, toggleSubItem}) => {

    return <div className="sidebar-item-bar">
        <div className="item-bar-title">
            <p className="title">Title</p>
        </div>

        <ItemListComponent channelData={channelData} toggleItem={toggleItem} toggleSubItem={toggleSubItem}/>

    </div>
};

const ItemListComponent = ({channelData, toggleItem, toggleSubItem}) => {

    return channelData.map((item, index) => {

        return <div key={index}>
            <div className="btn-item" onClick={() => toggleItem(item.route)}>{item.routeTitle}</div>
            {item.selected ? <SubItemListComponent route={item.route} subItemList={item.subItemList} toggleSubItem={toggleSubItem}/> : ""}
        </div>
    });

};

const SubItemListComponent = ({route, subItemList, toggleSubItem}) => {


    return subItemList.map((subItem, index) => {

        return <div key={index} className="btn-sub-item"
                    onClick={() => toggleSubItem(route, subItem.code)}>{subItem.subItemTitle}</div>
    });
};