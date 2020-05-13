import {INIT_APP, INIT_EDITORIAL_CONTEXT, STORED_EDITORIAL_CONTEXT} from "../Costants/CommonConstants";

export const initApp = () => {
    return {
        type: INIT_APP
    }
};

export const initEditorialContext = () => {
    return {
        type: INIT_EDITORIAL_CONTEXT,
    }
};

export const storedEditorialContext = (result) => {
    return {
        type: STORED_EDITORIAL_CONTEXT,
        result
    }
};