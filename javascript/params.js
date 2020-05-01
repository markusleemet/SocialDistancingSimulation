const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const numberFromUrl = Number(urlParams.get('number'));
