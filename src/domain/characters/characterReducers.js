import { FETCH_CHARACTERS } from "./characterActions";

export default function (state = {}, action) {
	switch (action.type) {
		case FETCH_CHARACTERS:
			return { ...state, characters: action.payload };
		default:
			return state;
	}
}
