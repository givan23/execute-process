import {INIT_FOOTER, SHOW_FOOTER_TOGGLE, STORED_FOOTER_DETAIL} from "../Costants/FooterConstants";

export const initFooter = () => {

    return {
        type: INIT_FOOTER
    }
};

export const storedFooterDetail = (result) => {

    return {
        type: STORED_FOOTER_DETAIL,
        result
    }
};


export const showFooterToggle = () => {

    return {
        type: SHOW_FOOTER_TOGGLE,
    }
};