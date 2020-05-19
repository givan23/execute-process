import React from "react";
import {ARROW_SX, X_BTN} from "../Core/Constants/GenericConstants";
import {DYNAMIC_BASE_URL, IMAGES_TOOLBAR_PATH} from "../Core/Constants/SidebarConstants";


export const ToolbarDevtoolComponent = ({buttonList = [], isClose, toggleCloseSidebar, onClickTool}) => {

    return <div className="sidebar-tool-bar">
             <div className="btn-close" onClick={toggleCloseSidebar}>{isClose ? ARROW_SX : X_BTN}</div>
             <ButtonListComponent buttonList={buttonList} onClickTool={onClickTool}/>
           </div>
};

const ButtonListComponent = ({buttonList, onClickTool}) => {
    return  <div className="btn-slot">
                 {
                     buttonList.map((item, index) => {
                         return <div key={index} className="btn-item" onClick={()=> onClickTool(item.btnCode)}>
                             <img className="btm-img" src={DYNAMIC_BASE_URL + IMAGES_TOOLBAR_PATH + item.iconPath} alt=""/>
                         </div>
                     })
                 }
            </div>
};