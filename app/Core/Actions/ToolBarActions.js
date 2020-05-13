import {INIT_TOOL_BAR, STORED_TOOL_BAR_DETAIL} from "../Costants/ToolBarConstants";


export const initToolBar = ()=> {

    return {
        type: INIT_TOOL_BAR
    }
};

export const storedToolBarDetail = (result)=> {

    return {
        type: STORED_TOOL_BAR_DETAIL,
        result
    }
};