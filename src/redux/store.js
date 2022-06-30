
import { combineReducers } from "redux";
import { messageReducer } from "./messageReducer";

const  initialState= {
	message:messageReducer
}

export const rootReducer = combineReducers(initialState)