import React from "react";


export const ToolBarComponent = ({buttonList = [], isClose, toggleClose, onClickTool}) => {

    return <div className="sidebar-tool-bar">
        <div className="btn-close" onClick={toggleClose}>{isClose ? "◄" : "X"}</div>
        <div className="btn-slot">

            <ButtonListComponent buttonList={buttonList} onClickTool={onClickTool}/>

        </div>
    </div>
};

const ButtonListComponent = ({buttonList, onClickTool}) => {

    return buttonList.map((item, index) => {

        return <div key={index} className="btn-item" onClick={()=> onClickTool(item.btnCode)}>
            <img className="btm-img" src={"//localhost:8006/images/tool-bar-devtool/icons/" + item.iconPath}
                 alt=""/>
        </div>
    })
};