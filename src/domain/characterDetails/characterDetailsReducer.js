import { FETCH_CHARACTER_DETAILS } from "./characterDetailsActions";

export default function (state = {}, action) {
	switch (action.type) {
		case FETCH_CHARACTER_DETAILS:
			return { ...state, ...action.payload };
		default:
			return state;
	}
}
