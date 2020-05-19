import editorialContextReducer from "../Core/Reducers/EditorialContextReducer";
import headerReducer from "../Core/Reducers/header/HeaderReducer";
import toolBarReducer from "../Core/Reducers/tool-bar/ToolBarReducer";
import centralContentReducers from "../Core/Reducers/central/CentralContentReducers";
import footerReducer from "../Core/Reducers/footer/FooterReducer";
import devtoolSidebarReducers from "../ExternalModules/devtool-module/Core/Reducers/DevtoolSidebarReducers";
import devtoolLayoutReducers from "../ExternalModules/devtool-module/Core/Reducers/DevtoolLayoutReducers";
import devtoolViewportReducers from "../ExternalModules/devtool-module/Core/Reducers/DevtoolViewportReducers";
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
    devtoolSidebarReducers,
    devtoolLayoutReducers,
    devtoolViewportReducers,

    //COMMON
    headerStaticReducers,
    footerStaticReducers

    //%InsertReducer%
}
