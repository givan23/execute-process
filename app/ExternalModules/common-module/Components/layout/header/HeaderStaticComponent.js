import React from "react";
import parser from "react-html-parser";
import header from "../../snippet/header/header.html";
import {isShow} from "../../../../../ExecuteProcess/Utils/layoutUtils";


class HeaderStaticComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const p = this.props;

        return <div>
            {isShow(p.header,p.viewport) ? parser(header) : null}
        </div>
    }
}

export default HeaderStaticComponent;