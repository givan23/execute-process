import {createHashHistory} from 'history';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {createLogicMiddleware} from "redux-logic";
import managers from "./Managers";
import * as axios from "axios";
import reducers from "./Reducers";

//HISTORY
const history = createHashHistory({hashType: "hashbang"});


//COMBINE REDUCERS
const createRootReducer = combineReducers({
    router: connectRouter(history),
    ...reducers
});

//AXIOS
const dependencies = {httpClient: axios};

//LOGIC MIDDLEWARE
const logicMiddleware = createLogicMiddleware(managers, dependencies);

//CREATE STORE
const store = createStore(
    createRootReducer,
    compose(
        applyMiddleware(routerMiddleware(history)),
        applyMiddleware(logicMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
);

export {store,history}

/*

import {createHashHistory} from "history";
import {createEnhancer} from "../Utils/CreateStoreUtils";

//REDUCERS
const rootReducer = combineReducers(reducers);

//MIDDELWARE
const dependencies = { httpClient: axios };
const logicMiddleware = createLogicMiddleware(managers, dependencies);
const enhancer = createEnhancer(logicMiddleware);

//CREATE STORE
const store = createStore(rootReducer, enhancer);
let history = createHashHistory({hashType: "hashbang"});

export {store, history};

*/

