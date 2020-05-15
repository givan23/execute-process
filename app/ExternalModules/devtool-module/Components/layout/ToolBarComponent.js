import React from "react";


export const ToolBarComponent = ({isClose, toggleClose}) => {

    return <div className="sidebar-tool-bar">
        <div className="btn-close" onClick={toggleClose}>{isClose ? "◄" : "X"}</div>
        <div className="btn-slot">

            <ButtonListComponent/>

        </div>
    </div>
};

const ButtonListComponent = () => {
    let arr = [{}, {}];
    return arr.map((item, index) => {

        return <div className="btn-item">
            <img className="btm-img" src={"//localhost:8006/images/tool-bar-devtool/icons/icon-" + index + ".png"}
                 alt=""/>
        </div>
    })
};