import React from "react";
import parser from "react-html-parser";
import searchBar from "../../snippet/search-bar/search-bar.html";

class SearchBarLayoutComponent extends React.Component {

    render() {
        return (
            <div>{parser(searchBar)}</div>
        );
    }
}

export default SearchBarLayoutComponent;