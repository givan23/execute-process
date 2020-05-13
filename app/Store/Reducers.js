import editorialContextReducer from "../Core/Reducers/EditorialContextReducer";
import headerReducer from "../Core/Reducers/header/HeaderReducer";
import toolBarReducer from "../Core/Reducers/tool-bar/ToolBarReducer";
import centralContentReducers from "../Core/Reducers/central/CentralContentReducers";
import footerReducer from "../Core/Reducers/footer/FooterReducer";
import devtoolSidebarReducers from "../ExternalModules/devtool-module/Core/Reducers/DevtoolSidebarReducers";
import devtoolLayoutReducers from "../ExternalModules/devtool-module/Core/Reducers/DevtoolLayoutReducers";


export default {
    editorialContextReducer,
    headerReducer,
    toolBarReducer,
    centralContentReducers,
    footerReducer,
    devtoolSidebarReducers,
    devtoolLayoutReducers
    //%InsertReducer%
}
