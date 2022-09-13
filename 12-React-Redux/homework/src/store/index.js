import { createStore, applyMiddleware, compose } from "redux";
import mainReducer from "../reducers";
import thunkMiddleware from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  mainReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;
