import { reducer as formReducer } from 'redux-form';
import {routerReducer} from "react-router-redux";
import {combineReducers} from "redux";

export const reducers = combineReducers({
    form: formReducer,
    routing: routerReducer,
});