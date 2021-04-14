const url = 'https://api.coincap.io/v2';

function getAssets() {
	return fetch(`${url}/assets?limit=20`) // traigo sólo 20 criptomonedas (assets)
		.then(response => response.json())
		.then(data => data.data) //asi viene establecido en la API, más doc en https://docs.coincap.io/#ab6ce4ff-3669-4b60-88bb-a5e7c12e6881
}

function getDataAsset(coin) {
	return fetch(`${url}/assets/${coin}`)
		.then(response => response.json())
		.then(data => data.data)
}

function getAssetHistory(coin) {
	const now = new Date;
	const end = now.getTime(); //el valor de ahora

	now.setDate(now.getDate() - 1); //setea un dia anterior
	const start = now.getTime(); //el valor de ahora menos un día como se seteó arriba

	return fetch(`${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`) //traigo un valor por cda hora con h1 (hay más opciones en la doc de la api)
		.then(response => response.json())
		.then(data => data.data)
}

function getMarkets(coin) {
	return fetch(`${url}/assets/${coin}/markets?limit=5`)
		.then(response => response.json())
		.then(data => data.data)
}

function getExchange(id) {
	return fetch(`${url}/exchanges/${id}`)
		.then(response => response.json())
		.then(data => data.data)
}

export default {
	getAssets,
	getDataAsset,
	getAssetHistory,
	getMarkets,
	getExchange,
}