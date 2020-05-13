import {createLogic} from "redux-logic";
import "babel-polyfill";
import {INIT_FOOTER} from "../../Costants/FooterConstants";
import {NETWORK_CALL_ERROR, RESPONSE_CODE_SUCCESS} from "../../Costants/NetworkConstants";
import {storedFooterDetail} from "../../Actions/FooterActions";


export const footerManager = createLogic({
    type: [INIT_FOOTER],

    process({action, getState}, dispatch, done) {

        try {

            const data = getFooterDataService();
            const {code = 0, result = {}} = data;

            if (code === RESPONSE_CODE_SUCCESS) {

                dispatch(storedFooterDetail(result));

            } else {
                console.log(NETWORK_CALL_ERROR);
            }

        } catch (error) {
            console.log(NETWORK_CALL_ERROR, error);
        }

        done();
    }
});

export const FooterManagers = [footerManager];

const getFooterDataService = () => {
    return {
        code: 1,
        result: {
            footerContent: {
                socialList: [{url: "/a", path: ""}, {url: "/b", path: ""}, {url: "/c", path: ""}],
                sectionList: [
                    {
                        "firstSectionList": [
                            {"code": 1, "detail": "detail-1", "url": "/url1"},
                            {"code": 2, "detail": "detail-2", "url": "/url2"},
                            {"code": 3, "detail": "detail-3", "url": "/url3"},
                            {"code": 4, "detail": "detail-4", "url": "/url4"},
                            {"code": 5, "detail": "detail-5", "url": "/url5"},
                            {"code": 6, "detail": "detail-6", "url": "/url6"},
                            {"code": 7, "detail": "detail-7", "url": "/url7"},
                            {"code": 8, "detail": "detail-8", "url": "/url8"}
                        ]
                    }, {
                        "secondSectionList": [
                            {"code": 1, "detail": "detail-1", "url": "/url1"},
                            {"code": 2, "detail": "detail-2", "url": "/url2"},
                            {"code": 3, "detail": "detail-3", "url": "/url3"},
                            {"code": 4, "detail": "detail-4", "url": "/url4"},
                            {"code": 5, "detail": "detail-5", "url": "/url5"},
                            {"code": 6, "detail": "detail-6", "url": "/url6"},
                            {"code": 7, "detail": "detail-7", "url": "/url7"},
                            {"code": 8, "detail": "detail-8", "url": "/url8"}
                        ]
                    },
                    {
                        "thirdSectionList": [
                            {"code": 1, "detail": "detail-1", "url": "/url1"},
                            {"code": 2, "detail": "detail-2", "url": "/url2"},
                            {"code": 3, "detail": "detail-3", "url": "/url3"},
                            {"code": 4, "detail": "detail-4", "url": "/url4"},
                            {"code": 5, "detail": "detail-5", "url": "/url5"},
                            {"code": 6, "detail": "detail-6", "url": "/url6"},
                            // {"code": 7, "detail": "detail-7", "url": "/url7"},
                            // {"code": 8, "detail": "detail-8", "url": "/url8"}
                        ]
                    }
                ]
            }
        }
    };
};