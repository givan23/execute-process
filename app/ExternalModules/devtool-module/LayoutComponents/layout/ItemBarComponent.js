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
            <div className="btn-item" onClick={ () => toggleItem(item.url)}>{item.url}</div>
            {item.selected ? <SubItemListComponent url={item.url} subItemList={item.subItemList} toggleSubItem={toggleSubItem}/> : ""}
        </div>
    });

};

const SubItemListComponent = ({url, subItemList, toggleSubItem}) => {


    return subItemList.map((subItem, index) => {

        return <div key={index} className="btn-sub-item"
                    onClick={() => toggleSubItem(url, subItem.code)}>{subItem.subItemTitle}</div>
    });
};