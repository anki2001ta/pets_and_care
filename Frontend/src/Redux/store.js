import Reducer from "./AppReducer/Reducer";
import { legacy_createStore } from 'redux';
export const store = legacy_createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());