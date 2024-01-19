import { applyMiddleware, legacy_createStore as createrStore } from "redux";
import { todoReducer } from "./reducers";
import { thunk } from "redux-thunk";

export const store = createrStore(todoReducer, applyMiddleware(thunk));
