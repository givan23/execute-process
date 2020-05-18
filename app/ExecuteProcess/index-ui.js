import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import {store, history } from '../Store/CreateStore';

import HeaderLayoutContainer from "../ExternalModules/common-module/Containers/HeaderLayoutContainer";
import RoutingStaticCentralContent from "./Rooting/RoutingCentralContentUi";
import FooterLayoutContainer from "../ExternalModules/common-module/Containers/FooterLayoutContainer";

import {
    CENTRAL_CONTENT_SELECTOR, DEVTOOL_SELECTOR,
    FOOTER_SELECTOR,
    HEADER_SELECTOR, SEARCH_BAR_SELECTOR, TOOL_BAR_SELECTOR
} from "../ExternalModules/common-module/Constants/SelectorConstants";
import {
    BOX_MESSAGE_GREEN,
    BOX_MESSAGE_RED,
    CENTRAL_SELECTOR_LOADED,
    CENTRAL_SELECTOR_NOT_LOADED, DEVTOOL_LOADED, DEVTOOL_NOT_LOADED, FOOTER_SELECTOR_LOADED, FOOTER_SELECTOR_NOT_LOADED,
    HEADER_SELECTOR_LOADED,
    HEADER_SELECTOR_NOT_LOADED,
    NAVBAR_SELECTOR_LOADED,
    NAVBAR_SELECTOR_NOT_LOADED
} from "../ExternalModules/common-module/Constants/ConsoleMessage";
import DevtoolLayoutContainer from "../ExternalModules/devtool-module/Containers/DevtoolLayoutContainer";
import {initResizeWindow} from "./Utils/ResizeUtils";
import {initDevtool} from "../ExternalModules/devtool-module/Core/Actions/InitDevtoolActions";
import SearchBarLayoutContainer from "../ExternalModules/common-module/Containers/SearchBarLayoutContainer";




export const renderStaticHeader = store => {
    const interval = setInterval(() => {

        const headerWrapper = document.getElementById(HEADER_SELECTOR);

        if (headerWrapper) {
            clearInterval(interval);

            render(
                <Provider store={store}>
                    <HeaderLayoutContainer/>
                </Provider>,
                headerWrapper
            );
            console.log(HEADER_SELECTOR_LOADED, BOX_MESSAGE_GREEN);
        } else {
            console.log(HEADER_SELECTOR_NOT_LOADED, BOX_MESSAGE_RED);
        }
    }, 500)
};

export const renderStaticSearchBar = store => {
    const interval = setInterval(() => {

        const searchBarWrapper = document.getElementById(SEARCH_BAR_SELECTOR);

        if (searchBarWrapper) {
            clearInterval(interval);
            render(
                <Provider store={store}>
                    <SearchBarLayoutContainer/>
                </Provider>,
                searchBarWrapper
            );
            console.log(NAVBAR_SELECTOR_LOADED, BOX_MESSAGE_GREEN);
        } else {
            console.log(NAVBAR_SELECTOR_NOT_LOADED, BOX_MESSAGE_RED);
        }
    }, 500)
};


export const renderStaticCentralContent = (store, history) => {
    const interval = setInterval(() => {

        const centralContentWrapper = document.getElementById(CENTRAL_CONTENT_SELECTOR);

        if (centralContentWrapper) {
            clearInterval(interval);
            render(
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <RoutingStaticCentralContent/>
                    </ConnectedRouter>
                </Provider>,
                centralContentWrapper
            );
            console.log(CENTRAL_SELECTOR_LOADED, BOX_MESSAGE_GREEN);
        } else {
            console.log(CENTRAL_SELECTOR_NOT_LOADED, BOX_MESSAGE_RED);
        }
    }, 500)
};


export const renderDevtool = (store) => {
    const interval = setInterval(() => {

        const centralContentWrapper = document.getElementById(DEVTOOL_SELECTOR);

        if (centralContentWrapper) {
            clearInterval(interval);
            render(
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <DevtoolLayoutContainer/>
                    </ConnectedRouter>
                </Provider>,
                centralContentWrapper
            );
            console.log(DEVTOOL_LOADED, BOX_MESSAGE_GREEN);
        } else {
            console.log(DEVTOOL_NOT_LOADED, BOX_MESSAGE_RED);
        }
    }, 500)
};


export const renderStaticFooter = store => {
    const interval = setInterval(() => {

        const footerWrapper = document.getElementById(FOOTER_SELECTOR);

        if (footerWrapper) {
            clearInterval(interval);
            render(
                <Provider store={store}>
                    <FooterLayoutContainer/>
                </Provider>,
                footerWrapper
            );
            console.log(FOOTER_SELECTOR_LOADED, BOX_MESSAGE_GREEN);
        } else {
            console.log(FOOTER_SELECTOR_NOT_LOADED, BOX_MESSAGE_RED);
        }
    }, 500)
};


renderStaticHeader(store);
renderStaticSearchBar(store);
renderStaticCentralContent(store, history);
renderDevtool(store);
renderStaticFooter(store);

initResizeWindow(store);
store.dispatch(initDevtool());
