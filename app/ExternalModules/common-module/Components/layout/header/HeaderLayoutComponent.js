import React from "react";
import parser from "react-html-parser";
import header from "../../snippet/header/header.html";

class HeaderLayoutComponent extends React.Component {

    render() {
        return (
            <div>{parser(header)}</div>
        );
    }
}

export default HeaderLayoutComponent;