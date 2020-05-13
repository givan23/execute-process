import {createLogic} from "redux-logic";
import "babel-polyfill";
import {NETWORK_CALL_ERROR} from "../../Costants/NetworkConstants";
import {INIT_EDITORIAL_CONTEXT} from "../../Costants/CommonConstants";
import {storedEditorialContext} from "../../Actions/CommonActions";


export const editorialContextManagers = createLogic({
    type: [INIT_EDITORIAL_CONTEXT],

    process({action, getState}, dispatch, done) {
        try {
            const storeEditorialContext = window.editorialContext;
            dispatch(storedEditorialContext(storeEditorialContext));

        } catch (error) {
            console.log(NETWORK_CALL_ERROR, error);
        }

        done();
    }
});

export const EditorialContextManagers = [editorialContextManagers];