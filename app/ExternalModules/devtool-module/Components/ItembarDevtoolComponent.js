import React from "react";
import {ROUTES_TITLE} from "../Core/Constants/SidebarConstants";


export const ItembarDevtoolComponent = ({theme, btnCode, channelData = [], viewport, toggleItem, toggleSubItem}) => {

    return <div className={"sidebar-item-bar"+theme}>
        <div className={"item-bar-title"+theme}>
            {btnCode === "STATIC" ? <p className={"title"+theme}>{ROUTES_TITLE}</p> : ""}
        </div>
        <ItemListComponent theme={theme} channelData={channelData} viewport={viewport} toggleItem={toggleItem}
                           toggleSubItem={toggleSubItem}/>
    </div>
};

const ItemListComponent = ({theme, channelData = [], viewport, toggleItem, toggleSubItem}) => {
    return channelData.map((item, index) => {
        return <div key={index}>
            <div className={"btn-item"+theme} onClick={() => toggleItem(item.route)}>{item.routeTitle}</div>
            {item.selected ? <SubItemListComponent theme={theme} subItemList={item.subItemList} viewport={viewport} route={item.route}
                                                   toggleSubItem={toggleSubItem}/> : ""}
        </div>
    });
};

const SubItemListComponent = ({theme, subItemList, route, viewport, toggleSubItem}) => {
    return subItemList.map((subItem, index) => {

        return viewport === subItem.viewport || subItem.viewport === "responsive" ?
            <div key={index} className={subItem.status ? "btn-sub-item"+theme+" btn-status"+theme : "btn-sub-item"+theme}
                 onClick={() => toggleSubItem(route, subItem.code)}>{subItem.subItemTitle}</div>
            : ""
    });
};