import { getRequest } from "../../utils/apiFunctions";

export const FETCH_CHARACTER_DETAILS = "FETCH_CHARACTER_DETAILS";

export function fetchCharacterDetails(characterID) {
	const endpoint = `characters/${characterID}`;
	const response = getRequest(endpoint);

	return {
		type: FETCH_CHARACTER_DETAILS,
		payload: response
	};
}
