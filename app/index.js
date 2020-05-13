import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {store,history} from "./Store/CreateStore";
import {ConnectedRouter} from "connected-react-router";
import {
    CENTRAL_CONTENT_SELECTOR,
    ERROR_WRAPPER_FOUND,
    FOOTER_SELECTOR,
    HEADER_SELECTOR, TOOL_BAR_SELECTOR
} from "./Core/Costants/IndexConstants";
import RoutingCentralContent from "./Components/RoutingCentralContent";
import HeaderContainer from "./Containers/header/HeaderContainer";
import FooterContainer from "./Containers/footer/FooterContainer";
import ToolBarContainer from "./Containers/tool-bar/ToolBarContainer";
import {initApp} from "./Core/Actions/CommonActions";



export const renderHeader = store => {

    const headerWrapper = document.getElementById(HEADER_SELECTOR);

    if (headerWrapper) {
        render(

            <Provider store={store}>
                <HeaderContainer/>
            </Provider>,
            headerWrapper
        );
    } else {
        console.warn(ERROR_WRAPPER_FOUND);
    }
};

export const renderToolBar = store => {

    const toolBarWrapper = document.getElementById(TOOL_BAR_SELECTOR);

    if (toolBarWrapper) {
        render(
            <Provider store={store}>
                <ToolBarContainer/>
            </Provider>,
            toolBarWrapper
        );
    } else {
        console.warn(ERROR_WRAPPER_FOUND);
    }
};


export const renderCentralContent = (store, history) => {

    const centralContentWrapper = document.getElementById(CENTRAL_CONTENT_SELECTOR);

    if (centralContentWrapper) {
        render(
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <RoutingCentralContent/>
                </ConnectedRouter>
            </Provider>,
            centralContentWrapper
        );
    } else {
        console.warn(ERROR_WRAPPER_FOUND);
    }
};


export const renderFooter = store => {
    const footerWrapper = document.getElementById(FOOTER_SELECTOR);

    if (footerWrapper) {
        render(
            <Provider store={store}>
                <FooterContainer/>
            </Provider>,
            footerWrapper
        );
    } else {
        console.warn(ERROR_WRAPPER_FOUND);
    }
};


renderHeader(store);
renderToolBar(store);
renderCentralContent(store,history);
renderFooter(store);
store.dispatch(initApp());

// setLocalStorage(SnippetListCommon);
// appendLocalStorage(SNIPPET_GLOBAL, SnippetListVirtual);
// const SnippetListGlobal = getLocalStorage(SNIPPET_GLOBAL);
//
// // Try edit message
// const data = [{
//     message: 'Hello world',
// }];
// const data2 = [{
//     message: 'Hello world',
// }]
// let dataS= JSON.stringify(data);
// localStorage.setItem("PROVA",dataS);
// let a = JSON.parse(localStorage.getItem("PROVA"));
// a.push(data2)
//
//
// localStorage.setItem("PROVA",JSON.stringify(a));
// let b = JSON.parse(localStorage.getItem("PROVA"));
// console.log(b);