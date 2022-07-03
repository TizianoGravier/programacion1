//buscador
let buscador = document.querySelector('form')
let search = document.querySelector(".search")

buscador.addEventListener('submit',function(buscar){

    buscar.preventDefault()
    //console.log('error')

    if(search.value == ''){
        alert('que quiere buscar?')
    }
    else if(search.value.length < 3){
        alert('escriba minimo 3 caracteres')
    }
    else{
        this.submit()
    }
})

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