import React from "react";
import parser from "react-html-parser";
import footer from "../../snippet/footer/footer.html";

class FooterLayoutComponent extends React.Component {

    render() {
        return (
            <div>{parser(footer)}</div>
        );
    }
}

export default FooterLayoutComponent;