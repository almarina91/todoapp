import { createStore, combineReducers, applyMiddleware} from "redux";
import { todos } from "./todos/reducers";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";


//ubacimo definisane reducere, onda ih kombinujemo i od toga napravimo store
const reducers = { todos };

const rootReducer = combineReducers(reducers);

export const store = () => createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
