import {InitManagers} from "../Core/Logic/init/InitManagers";
import {HeaderManagers} from "../Core/Logic/header/HeaderManagers";
import {EditorialContextManagers} from "../Core/Logic/init/EditorialContextManagers";
import {ToolBarManagers} from "../Core/Logic/tool-bar/ToolBarManagers";
import {CentralContentManagers} from "../Core/Logic/central/CentralContentManagers";
import {FooterManagers} from "../Core/Logic/footer/FooterManagers";
import {InitDevtoolManagers} from "../ExternalModules/devtool-module/Core/Logic/InitDevtoolManagers";
import {ViewportDevtoolManagers} from "../ExternalModules/devtool-module/Core/Logic/ViewportDevtoolManagers";
import {SidebarDevtoolManagers} from "../ExternalModules/devtool-module/Core/Logic/SidebarDevtoolManagers";
import {DevtoolToolbarManagers} from "../ExternalModules/devtool-module/Core/Logic/ToolbarDevtoolManagers";
import {ItembarDevtoolManagers} from "../ExternalModules/devtool-module/Core/Logic/ItembarDevtoolManagers";





const managers = [
    ...InitManagers,
    ...EditorialContextManagers,
    ...HeaderManagers,
    ...ToolBarManagers,
    ...CentralContentManagers,
    ...FooterManagers,
    //DEVTOOL
    ...InitDevtoolManagers,
    ...ViewportDevtoolManagers,
    ...SidebarDevtoolManagers,
    ...DevtoolToolbarManagers,
    ...ItembarDevtoolManagers
    //%InsertManager%
];

export default managers;