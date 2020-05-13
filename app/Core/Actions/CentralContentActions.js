import {INIT_CENTRAL_CONTENT, STORED_CENTRAL_DETAIL} from "../Costants/CentralContentConstants";

export const initCentralContent = () => {

    return {
        type: INIT_CENTRAL_CONTENT
    }
};

export const storedCentralDetail = (result) => {

    return {
        type: STORED_CENTRAL_DETAIL,
        result
    }
};
