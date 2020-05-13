import {createLogic} from "redux-logic";
import "babel-polyfill";
import {NETWORK_CALL_ERROR, RESPONSE_CODE_SUCCESS} from "../../Costants/NetworkConstants";
import {INIT_HEADER} from "../../Costants/HeaderConstants";
import {storedHeaderDetail} from "../../Actions/HeaderActions";


export const headerManagers = createLogic({
    type: [INIT_HEADER],

    process({action, getState}, dispatch, done) {

        try {

            const data = getHeaderDataService();
            const {code = 0, result = {}} = data;

            if (code === RESPONSE_CODE_SUCCESS) {

                dispatch(storedHeaderDetail(result));

            } else {
                console.log(NETWORK_CALL_ERROR);
            }

        } catch (error) {
            console.log(NETWORK_CALL_ERROR, error);
        }

        done();
    }
});

export const HeaderManagers = [headerManagers];

const getHeaderDataService = () => {
    return {
        code: 1,
        result: {
            headerContent: {
                headerItem: {
                    access: {
                        name: "ACCESS",
                        url: "/access"
                    },
                    singIn: {
                        name: "SIGN IN",
                        url: "/sign-in"
                    },
                },
                navBarItems: {
                    home: {
                        name: "HOME",
                        url: "/home"
                    },
                    aboutUs: {
                        name: "ABOUT US",
                        url: "/about-us"
                    },
                    logo: {
                        url: "/sponsor"
                    },
                    sponsor: {
                        name: "SPONSOR",
                        url: "/sponsor"
                    },
                    contactUs: {
                        name: "CONTACT US",
                        url: "/contact-us"
                    }
                },
            }
        }
    };
};