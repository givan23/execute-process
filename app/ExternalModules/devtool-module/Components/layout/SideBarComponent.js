import React from "react";
import {ToolBarComponent} from "./ToolBarComponent";
import {ItemBarComponent} from "./ItemBarComponent";


class SideBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClose: false,
            isCloseFull: false
        };
    }

    render() {


        const toggleClose = () => {
            this.setState({
                isClose: !this.state.isClose
            });
        };

        const toggleCloseFull = () => {
            this.setState({
                isCloseFull: !this.state.isCloseFull
            });
        };

        return <div className="devtool">

            <div className={this.state.isCloseFull ? "devtool-hide-button-box close-button-full" : "devtool-hide-button-box"}
                 onClick={() => toggleCloseFull()}>
                <div className="btn-close">{"►"}</div>
            </div>

            <div className="devtool-box">
                <div className={this.state.isCloseFull ? "devtool-box-sidebar close-full-devtool" : this.state.isClose ? "devtool-box-sidebar close-devtool" : "devtool-box-sidebar"}>

                    <ToolBarComponent buttonList={this.props.buttonList} isClose={this.state.isClose}
                                      toggleClose={toggleClose}
                                      onClickTool={this.props.onClickTool}/>

                    <ItemBarComponent channelData={this.props.channelData}
                                      viewport={this.props.viewport}
                                      toggleItem={this.props.toggleItem}
                                      toggleSubItem={this.props.toggleSubItem}/>

                </div>
            </div>
        </div>

    }
}

export default SideBarComponent;



