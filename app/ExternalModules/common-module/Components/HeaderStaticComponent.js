import React from "react";
import parser from "react-html-parser";
import staticHeader from "./snippet/header/static.header.html";
import {isShow} from "../../../ExecuteProcess/Utils/layoutUtils";


class HeaderStaticComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {NODE_TYPE = "", subItemList = [], viewport = ""} = this.props;

        return <div>
            {
                NODE_TYPE === "ui-it" ?
                <HeaderItComponent subItemList={subItemList} viewport={viewport}/> :
                <HeaderBeComponent subItemList={subItemList} viewport={viewport}/>
            }
        </div>
    }
}

export default HeaderStaticComponent;

const HeaderItComponent = ({subItemList, viewport}) => {
    const [header = {}] = subItemList || [];

    return <>
        {isShow(header, viewport) ? parser(staticHeader) : null}
    </>
};

const HeaderBeComponent = ({subItemList, viewport}) => {
    const [header = {}] = subItemList || [];

    return <>
        {isShow(header, viewport) ? parser(staticHeader) : null}
    </>
};