import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import reducers from "../Store/Reducers";

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    ...reducers
});

export default createRootReducer