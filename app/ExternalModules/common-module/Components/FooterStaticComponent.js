import React from "react";
import parser from "react-html-parser";
import staticFooter from "./snippet/footer/static.footer.html";
import {isShow} from "../../../ExecuteProcess/Utils/layoutUtils";


class FooterStaticComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {NODE_TYPE = "", subItemList = [], viewport = ""} = this.props;

        return <div>
                    {
                        NODE_TYPE === "ui-it" ?
                            <FooterItComponent subItemList={subItemList} viewport={viewport}/> :
                            <FooterBeComponent subItemList={subItemList} viewport={viewport}/>
                    }
              </div>
    }
}

export default FooterStaticComponent;

const FooterItComponent = ({subItemList, viewport}) => {
    const [footer = {}] = subItemList || [];

    return <>
        {isShow(footer, viewport) ? parser(staticFooter) : null}
    </>
};

const FooterBeComponent = ({subItemList, viewport}) => {
    const [footer = {}] = subItemList || [];

    return <>
        {isShow(footer, viewport) ? parser(staticFooter) : null}
    </>
};
