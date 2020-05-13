import {createLogic} from "redux-logic";
import "babel-polyfill";
import {INIT_CENTRAL_CONTENT} from "../../Costants/CentralContentConstants";
import {NETWORK_CALL_ERROR, RESPONSE_CODE_SUCCESS} from "../../Costants/NetworkConstants";
import {storedCentralDetail} from "../../Actions/CentralContentActions";


const centralContentManager = createLogic({
    type: [INIT_CENTRAL_CONTENT],

    process({action, getState}, dispatch, done) {

        try {

            const data = getCentralDataService();
            const {code = 0, result = {}} = data;
            if (code === RESPONSE_CODE_SUCCESS) {


                dispatch(storedCentralDetail(result));

            } else {
                console.log(NETWORK_CALL_ERROR);
            }

        } catch (error) {
            console.log(NETWORK_CALL_ERROR, error);
        }

        done();
    }
});

export const CentralContentManagers = [centralContentManager];

const getCentralDataService = () => {
    return {
        code: 1,
        result: {
            centralContent: {
                content: "I'am central content"
            },
        }
    };
};