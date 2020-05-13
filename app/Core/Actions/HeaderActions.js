import {INIT_HEADER, STORED_HEADER_DETAIL} from "../Costants/HeaderConstants";

export const initHeader = ()=> {

    return {
        type: INIT_HEADER
    }
};

export const storedHeaderDetail = (result)=> {

    return {
        type: STORED_HEADER_DETAIL,
        result
    }
};

