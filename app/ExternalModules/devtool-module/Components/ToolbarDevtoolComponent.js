import React from "react";
import {ARROW_SX, X_BTN} from "../Core/Constants/GenericConstants";
import {DYNAMIC_BASE_URL, IMAGES_TOOLBAR_PATH} from "../Core/Constants/SidebarConstants";


export const ToolbarDevtoolComponent = ({theme, buttonList = [], isClose, toggleCloseSidebar, onClickTool}) => {

    return <div className={"sidebar-tool-bar"+theme}>
             <div className={"btn-close"+theme} onClick={toggleCloseSidebar}>{isClose ? ARROW_SX : X_BTN}</div>
             <ButtonListComponent theme={theme} buttonList={buttonList} onClickTool={onClickTool}/>
           </div>
};

const ButtonListComponent = ({theme, buttonList, onClickTool}) => {
    return  <div className={"btn-slot"+theme}>
                 {
                     buttonList.map((item, index) => {
                         return <div key={index} className={"btn-item"+theme} onClick={()=> onClickTool(item.btnCode)}>
                             <img className={"btm-img"+theme} src={DYNAMIC_BASE_URL + IMAGES_TOOLBAR_PATH + item.iconPath} alt=""/>
                         </div>
                     })
                 }
            </div>
};