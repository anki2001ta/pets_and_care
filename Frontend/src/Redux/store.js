import Reducer from "./AppReducer/Reducer";
import {
  legacy_createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
  Reducer,
  composeEnhancers(applyMiddleware(thunk))
);

export { store };
