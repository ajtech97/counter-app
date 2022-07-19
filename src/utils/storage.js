export const COUNTER = "COUNT";

export const setLocalData = (key, value) =>
	localStorage.setItem(key, JSON.stringify(value));

export const getLocalData = key => {
	return JSON.parse(localStorage.getItem(key) || "{}");
};
