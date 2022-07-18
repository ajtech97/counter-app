export const COUNTER = "COUNT";

export const setLocalData = (key, value) =>
	localStorage.setItem(key, JSON.stringify(value));

export const getLocalData = key => {
	const data = localStorage.getItem(key);
	return JSON.parse(data);
};
