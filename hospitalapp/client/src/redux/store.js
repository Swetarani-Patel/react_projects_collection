import {applyMiddleware, legacy_createStore as createrStore } from "redux";
import {thunk} from "redux-thunk"
import { reducer } from "./reducers";

export const store = createrStore(reducer, applyMiddleware(thunk));