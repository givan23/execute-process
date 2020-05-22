import React from "react";
import {ToolbarDevtoolComponent} from "./ToolbarDevtoolComponent";
import {ItembarDevtoolComponent} from "./ItembarDevtoolComponent";
import {ButtonCloseFullComponent} from "./ButtonCloseFullComponent";
import {GAME_CHANNEL, STATIC_CHANNEL, THEME_CHANNEL} from "../Core/Constants/SidebarConstants";


const SidebarDevtoolComponent = ({
                                     theme = "",
                                     viewport,
                                     channelData = [],
                                     channelThemeData = [],
                                     channelGameData = [],
                                     btnCode,
                                     buttonList = [],
                                     isClose,
                                     isCloseFull,
                                     toggleSubItem,
                                     toggleItem,
                                     onClickTool,
                                     toggleCloseSidebar,
                                     toggleCloseFullSidebar
                                 }) => {

console.log(theme);
    return <div className={"devtool "+theme}>

        <ButtonCloseFullComponent isCloseFull={isCloseFull} toggleCloseFullSidebar={toggleCloseFullSidebar}/>

        <div className="devtool-box">

            <div className={isCloseFull ? "devtool-box-sidebar close-full-devtool" :
                            isClose ?     "devtool-box-sidebar close-devtool" :
                                          "devtool-box-sidebar"
            }>

                <ToolbarDevtoolComponent buttonList={buttonList} isClose={isClose}
                                         toggleCloseSidebar={toggleCloseSidebar}
                                         onClickTool={onClickTool}/>


                <SwitchChannelItem viewport={viewport} channelData={channelData} btnCode={btnCode}
                                   channelThemeData={channelThemeData} channelGameData={channelGameData}
                                   toggleItem={toggleItem} toggleSubItem={toggleSubItem}/>


            </div>
        </div>
    </div>

};

export default SidebarDevtoolComponent;


const SwitchChannelItem = ({viewport, channelData, channelThemeData, channelGameData, btnCode, toggleItem, toggleSubItem}) => {

    let channelStatus = {
        [STATIC_CHANNEL]: <ItembarDevtoolComponent btnCode={btnCode} channelData={channelData} viewport={viewport} toggleItem={toggleItem} toggleSubItem={toggleSubItem}/>,
        [THEME_CHANNEL]: <ItembarDevtoolComponent btnCode={btnCode} channelData={channelThemeData} viewport={viewport} toggleItem={toggleItem} toggleSubItem={toggleSubItem}/>,
        [GAME_CHANNEL]: <GameComponent channelGameData={channelGameData}/>
    };

    return channelStatus[btnCode];

};


const GameComponent = ({channelGameData}) => {
    return <div className="theme">games component</div>
};