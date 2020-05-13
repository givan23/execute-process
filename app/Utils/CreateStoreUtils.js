import {applyMiddleware, compose} from "redux";

export const createEnhancer = (logicMiddleware) => {

   return compose(
        applyMiddleware(logicMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
};