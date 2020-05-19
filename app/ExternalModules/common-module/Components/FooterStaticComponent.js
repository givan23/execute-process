import React from "react";
import parser from "react-html-parser";
import footer from "./snippet/footer/footer.html";
import {isShow} from "../../../ExecuteProcess/Utils/layoutUtils";


class FooterStaticComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const p = this.props;

        return <div>
            {isShow(p.footer,p.viewport) ? parser(footer) : null}
        </div>
    }
}

export default FooterStaticComponent;