import React from "react";

export const ToolBarComponent = ({isClose, toggleClose})=> {

    return <div className="sidebar-tool-bar">
        <div className="btn-close" onClick={toggleClose}>{isClose ? "◄" : "X"}</div>
    </div>
};