import React from "react";
import {getViewportByResize} from "../../Core/Utils/SidebarUtils";

export const ItemBarComponent = ({channelData = [], viewport, toggleItem, toggleSubItem}) => {

    return <div className="sidebar-item-bar">
        <div className="item-bar-title">
            <p className="title">Title</p>
        </div>

        <ItemListComponent channelData={channelData} viewport={viewport} toggleItem={toggleItem} toggleSubItem={toggleSubItem}/>

    </div>
};

const ItemListComponent = ({channelData, viewport, toggleItem, toggleSubItem}) => {

    return channelData.map((item, index) => {

        return <div key={index}>
            <div className="btn-item" onClick={() => toggleItem(item.route)}>{item.routeTitle}</div>
            {item.selected ? <SubItemListComponent viewport={viewport} route={item.route} subItemList={item.subItemList} toggleSubItem={toggleSubItem}/> : ""}
        </div>
    });

};

const SubItemListComponent = ({ viewport, route, subItemList, toggleSubItem}) => {

    return subItemList.map((subItem, index) => {

        return viewport === subItem.viewport || subItem.viewport === "responsive" ?
            <div key={index} className="btn-sub-item" onClick={() => toggleSubItem(route, subItem.code)}>{subItem.subItemTitle}</div>
            : ""
    });
};