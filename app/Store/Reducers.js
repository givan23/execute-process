import editorialContextReducer from "../Core/Reducers/EditorialContextReducer";
import headerReducer from "../Core/Reducers/header/HeaderReducer";
import toolBarReducer from "../Core/Reducers/tool-bar/ToolBarReducer";
import centralContentReducers from "../Core/Reducers/central/CentralContentReducers";
import footerReducer from "../Core/Reducers/footer/FooterReducer";
import sidebarDevtoolReducers from "../ExternalModules/devtool-module/Core/Reducers/SidebarDevtoolReducers";
import staticDevtoolReducers from "../ExternalModules/devtool-module/Core/Reducers/StaticDevtoolReducers";
import viewportDevtoolReducers from "../ExternalModules/devtool-module/Core/Reducers/ViewportDevtoolReducers";
import headerStaticReducers from "../ExternalModules/common-module/Core/Reducers/HeaderStaticReducers";
import footerStaticReducers from "../ExternalModules/common-module/Core/Reducers/FooterStaticReducers";


export default {
    //INTERNAL DYNAMIC
    editorialContextReducer,
    headerReducer,
    toolBarReducer,
    centralContentReducers,
    footerReducer,

    //DEVTOOL
    viewportDevtoolReducers,
    sidebarDevtoolReducers,
    staticDevtoolReducers,


    //COMMON
    headerStaticReducers,
    footerStaticReducers

    //%InsertReducer%
}
