import {InitManagers} from "../Core/Logic/init/InitManagers";
import {HeaderManagers} from "../Core/Logic/header/HeaderManagers";
import {EditorialContextManagers} from "../Core/Logic/init/EditorialContextManagers";
import {ToolBarManagers} from "../Core/Logic/tool-bar/ToolBarManagers";
import {CentralContentManagers} from "../Core/Logic/central/CentralContentManagers";
import {FooterManagers} from "../Core/Logic/footer/FooterManagers";
import {SidebarManagers} from "../ExternalModules/devtool-module/Core/Logic/SidebarManagers";
import {ManagementBarManagers} from "../ExternalModules/devtool-module/Core/Logic/ManagementBarManagers";


const managers = [
    ...InitManagers,
    ...EditorialContextManagers,
    ...HeaderManagers,
    ...ToolBarManagers,
    ...CentralContentManagers,
    ...FooterManagers,
    ...SidebarManagers,
    ...ManagementBarManagers,

    //%InsertManager%
];

export default managers;