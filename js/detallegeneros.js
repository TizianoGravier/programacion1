let queryString = location.search;
let qsToObject = new URLSearchParams (queryString);
let idGeneros = qsToObject.get ('id'); 

console.log(queryString,'---', qsToObject,'---', idGeneros)