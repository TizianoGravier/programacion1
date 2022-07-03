let queryString = location.search;
let qsToObject = new URLSearchParams (queryString);
let idGeneros = qsToObject.get ('id'); 

console.log(queryString,'---', qsToObject,'---', idGeneros)

fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/genre' + idGeneros)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)

    
})
.catch(function(error){
    console.log('el error es ' + error)
})