import axios from "axios";
import md5 from "crypto-js/md5";

const API_KEY = "964a59e0d371a00671d8bdaa270bf9f0";
const API_SECRET = "c9e022efc136554dab7b2c69496bc7cc11dffcbc";
const ROOT_URL = "https://gateway.marvel.com/v1/public/";

export function getRequest(endpoint) {
	const timestamp = generateTimestamp();

	const request = axios.get(`${ROOT_URL}${endpoint}`,
		{
			params: {
				apikey: API_KEY,
				ts: timestamp,
				hash: generateHash(timestamp)
			}
		}).then(
		response => {
			return response.data.data.results;
		});

	return request;
}

export function generateTimestamp() {
	const timestamp = Date.now();
	return Math.floor(timestamp / 1000);
}

export function generateHash(timestamp: string) {
	return md5(timestamp + API_SECRET + API_KEY).toString();
}
