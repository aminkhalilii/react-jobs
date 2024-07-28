export const fetchApi = async (api, param = {}) => {
	let response = await fetch(`http://localhost:8000/${api}`, param);
	return await response.json();
};
