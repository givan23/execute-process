import React from 'react'

const ToolBarComponent = ({editorialContext = {}}) => {

    const {toolBar = {}, globalPath = {}} = editorialContext;
    const {localDomain = ""} = globalPath;
    const {relativePath = "", iconList = []} = toolBar;

    return <div className="tool-bar">
        <ToolBarIconComponent localDomain={localDomain} relativePath={relativePath} iconList={iconList}/>
    </div>
};

export default ToolBarComponent;

const ToolBarIconComponent = ({localDomain, relativePath, iconList = []}) => {

    return iconList.map(icon => {
        return <img className="tool-bar-icons" src={localDomain + relativePath + icon} alt="/#"/>
    });
};