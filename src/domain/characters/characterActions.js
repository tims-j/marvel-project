import { getRequest } from "../../utils/apiFunctions";

export const FETCH_CHARACTERS = "FETCH_CHARACTERS";

export function fetchCharacters() {
	const endpoint = "characters";
	const response = getRequest(endpoint);

	return {
		type: FETCH_CHARACTERS,
		payload: response
	};
}
