import React from "react";
import {getViewportByResize} from "../../Core/Utils/SidebarUtils";

export const ItemBarComponent = ({channelData = [], screenSize, toggleItem, toggleSubItem}) => {

    return <div className="sidebar-item-bar">
        <div className="item-bar-title">
            <p className="title">Title</p>
        </div>

        <ItemListComponent channelData={channelData} screenSize={screenSize} toggleItem={toggleItem} toggleSubItem={toggleSubItem}/>

    </div>
};

const ItemListComponent = ({channelData, screenSize, toggleItem, toggleSubItem}) => {

    return channelData.map((item, index) => {

        return <div key={index}>
            <div className="btn-item" onClick={() => toggleItem(item.route)}>{item.routeTitle}</div>
            {item.selected ? <SubItemListComponent screenSize={screenSize} route={item.route} subItemList={item.subItemList} toggleSubItem={toggleSubItem}/> : ""}
        </div>
    });

};

const SubItemListComponent = ({ screenSize, route, subItemList, toggleSubItem}) => {

    let viewport = getViewportByResize(screenSize);

    return subItemList.map((subItem, index) => {

        return viewport === subItem.viewport || subItem.viewport === "responsive" ?
            <div key={index} className="btn-sub-item" onClick={() => toggleSubItem(route, subItem.code)}>{subItem.subItemTitle}</div>
            : ""
    });
};