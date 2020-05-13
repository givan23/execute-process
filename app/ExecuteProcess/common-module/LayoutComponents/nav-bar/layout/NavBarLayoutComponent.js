import React from "react";
import parser from "react-html-parser";
import navBar from "../snippet/nav-bar.html";

class NavBarLayoutComponent extends React.Component {

    render() {
        return (
            <div>{parser(navBar)}</div>
        );
    }
}

export default NavBarLayoutComponent;