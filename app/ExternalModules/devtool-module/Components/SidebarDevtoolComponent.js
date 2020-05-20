import React from "react";
import {ToolbarDevtoolComponent} from "./ToolbarDevtoolComponent";
import {ItembarDevtoolComponent} from "./ItembarDevtoolComponent";
import {ButtonCloseFullComponent} from "./ButtonCloseFullComponent";


const SidebarDevtoolComponent = ({
                              viewport,
                              channelData,
                              buttonList,
                              isClose,
                              isCloseFull,
                              toggleSubItem,
                              toggleItem,
                              onClickTool,
                              toggleCloseSidebar,
                              toggleCloseFullSidebar
                          }) => {



    const channel = "games";
    console.log("channelData: ", channelData);
    return <div className="devtool">

        <ButtonCloseFullComponent isCloseFull={isCloseFull} toggleCloseFullSidebar={toggleCloseFullSidebar}/>

        <div className="devtool-box">
            <div className={ isCloseFull ? "devtool-box-sidebar close-full-devtool" :
                             isClose ? "devtool-box-sidebar close-devtool" : "devtool-box-sidebar"}>

                <ToolbarDevtoolComponent buttonList={buttonList} isClose={isClose}
                                         toggleCloseSidebar={toggleCloseSidebar}
                                         onClickTool={onClickTool}/>

                {channel !== "STATIC" ?
                <ItembarDevtoolComponent channelData={channelData}
                                         viewport={viewport}
                                         toggleItem={toggleItem}
                                         toggleSubItem={toggleSubItem}/>
                : <GameEmbeddedComponent/>
                }

            </div>
        </div>
    </div>

};

export default SidebarDevtoolComponent;


const GameEmbeddedComponent = () => {

    return <div>games</div>
};

