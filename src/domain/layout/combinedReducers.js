import { combineReducers } from "redux";
import characterReducer from "../characters/characterReducers";
import characterDetailsreducer from "../characterDetails/characterDetailsReducer";

const combinedReducers = combineReducers({
	characters: characterReducer,
	characterDetails: characterDetailsreducer
});

export default combinedReducers;
