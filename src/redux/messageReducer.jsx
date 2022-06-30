import { types } from "./types";

const initialState ={
	status:false
}

export const messageReducer = (state=initialState,action){
	switch(action.type){
		case types.MASSAGE_TRUE:
			return { ...state,status:true}
		case types.MASSAGE_FALSE:
			return { ...state,status:false}
		default:
			return state
	}
}