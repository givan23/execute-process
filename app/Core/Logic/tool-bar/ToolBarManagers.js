import {createLogic} from "redux-logic";
import "babel-polyfill";
import {NETWORK_CALL_ERROR, RESPONSE_CODE_SUCCESS} from "../../Costants/NetworkConstants";
import {INIT_TOOL_BAR} from "../../Costants/ToolBarConstants";
import {storedToolBarDetail} from "../../Actions/ToolBarActions";


export const toolBarManagers = createLogic({
    type: [INIT_TOOL_BAR],

    process({action, getState}, dispatch, done) {

        try {

            const data = getToolBarDataService();
            const {code = 0, result = {}} = data;

            if (code === RESPONSE_CODE_SUCCESS) {

                dispatch(storedToolBarDetail(result));

            } else {
                console.log(NETWORK_CALL_ERROR);
            }

        } catch (error) {
            console.log(NETWORK_CALL_ERROR, error);
        }

        done();
    }
});

export const ToolBarManagers = [toolBarManagers];

const getToolBarDataService = () => {
    return {
        code: 1,
        result: {
            toolBarContent: {
                toolBarLanguage: {},
                toolBarFac: {},
                toolBarLogin: {},
                toolBarSingIn: {},
            }
        }
    };
};