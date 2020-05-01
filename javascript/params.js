const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const numberFromUrl = urlParams.get('number');
