import {InitManagers} from "../Core/Logic/init/InitManagers";
import {HeaderManagers} from "../Core/Logic/header/HeaderManagers";
import {EditorialContextManagers} from "../Core/Logic/init/EditorialContextManagers";
import {ToolBarManagers} from "../Core/Logic/tool-bar/ToolBarManagers";
import {CentralContentManagers} from "../Core/Logic/central/CentralContentManagers";
import {FooterManagers} from "../Core/Logic/footer/FooterManagers";
import {InitDevtoolManagers} from "../ExternalModules/devtool-module/Core/Logic/InitDevtoolManagers";
import {DevtoolViewportManagers} from "../ExternalModules/devtool-module/Core/Logic/DevtoolViewportManagers";
import {DevtoolSidebarManagers} from "../ExternalModules/devtool-module/Core/Logic/DevtoolSidebarManagers";
import {DevtoolBarsManagers} from "../ExternalModules/devtool-module/Core/Logic/DevtoolBarsManagers";




const managers = [
    ...InitManagers,
    ...EditorialContextManagers,
    ...HeaderManagers,
    ...ToolBarManagers,
    ...CentralContentManagers,
    ...FooterManagers,
    ...InitDevtoolManagers,
    ...DevtoolViewportManagers,
    ...DevtoolSidebarManagers,
    ...DevtoolBarsManagers,


    //%InsertManager%
];

export default managers;