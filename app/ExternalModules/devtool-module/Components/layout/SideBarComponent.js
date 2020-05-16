import React from "react";
import {ToolBarComponent} from "./ToolBarComponent";
import {ItemBarComponent} from "./ItemBarComponent";


class SideBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClose: false
        };
    }

    render() {

        const toggleClose = () => {
            this.setState({
                isClose: !this.state.isClose
            });
        };

        return (

            <div className="devtool">
                <div className={this.state.isClose ? "devtool-sidebar close" : "devtool-sidebar"}>

                    <ToolBarComponent buttonList={this.props.buttonList} isClose={this.state.isClose}
                                      toggleClose={toggleClose}
                                      onClickTool={this.props.onClickTool}/>

                    <ItemBarComponent channelData={this.props.channelData}
                                      viewport={this.props.viewport}
                                      toggleItem={this.props.toggleItem}
                                      toggleSubItem={this.props.toggleSubItem}
                    />

                </div>
            </div>

        );
    }
}

export default SideBarComponent;



