import {createLogic} from "redux-logic";
import "babel-polyfill";
import editorialContext from "../../../../public/editorialContext/editorialContext.js";
import {NETWORK_CALL_ERROR} from "../../Costants/NetworkConstants";
import {INIT_APP} from "../../Costants/CommonConstants";
import {initCentralContent} from "../../Actions/CentralContentActions";
import {initFooter} from "../../Actions/FooterActions";
import {initHeader} from "../../Actions/HeaderActions";
import {initToolBar} from "../../Actions/ToolBarActions";
import {initEditorialContext, storedEditorialContext} from "../../Actions/CommonActions";


export const initManagers = createLogic({
    type: [INIT_APP],

    process({action, getState}, dispatch, done) {

        try {

            dispatch(initEditorialContext());
            dispatch(initHeader());
            dispatch(initToolBar());
            dispatch(initCentralContent());
            dispatch(initFooter());

        } catch (error) {
            console.log(NETWORK_CALL_ERROR, error);
        }

        done();
    }
});

export const InitManagers = [initManagers];