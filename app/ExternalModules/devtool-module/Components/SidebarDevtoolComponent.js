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


    return <div className={"devtool"+theme}>

        <ButtonCloseFullComponent theme={theme} isCloseFull={isCloseFull} toggleCloseFullSidebar={toggleCloseFullSidebar}/>

        <div className={"devtool-box"+theme}>

            <div className={isCloseFull ? "devtool-box-sidebar"+theme+" close-full-devtool"+theme :
                            isClose ?     "devtool-box-sidebar"+theme+" close-devtool"+theme :
                                          "devtool-box-sidebar"+theme
            }>

                <ToolbarDevtoolComponent theme={theme} buttonList={buttonList} isClose={isClose}
                                         toggleCloseSidebar={toggleCloseSidebar}
                                         onClickTool={onClickTool}/>


                <SwitchChannelItem theme={theme} viewport={viewport} channelData={channelData} btnCode={btnCode}
                                   channelThemeData={channelThemeData} channelGameData={channelGameData}
                                   toggleItem={toggleItem} toggleSubItem={toggleSubItem}/>


            </div>
        </div>
    </div>

};

export default SidebarDevtoolComponent;


const SwitchChannelItem = ({theme, viewport, channelData, channelThemeData, channelGameData, btnCode, toggleItem, toggleSubItem}) => {

    let channelStatus = {
        [STATIC_CHANNEL]: <ItembarDevtoolComponent theme={theme} btnCode={btnCode} channelData={channelData} viewport={viewport} toggleItem={toggleItem} toggleSubItem={toggleSubItem}/>,
        [THEME_CHANNEL]: <ItembarDevtoolComponent theme={theme} btnCode={btnCode} channelData={channelThemeData} viewport={viewport} toggleItem={toggleItem} toggleSubItem={toggleSubItem}/>,
        [GAME_CHANNEL]: <GameComponent theme={theme} channelGameData={channelGameData}/>
    };

    return channelStatus[btnCode];

};


const GameComponent = ({theme, channelGameData}) => {
    return <div className={"theme"+theme}>games component</div>
};