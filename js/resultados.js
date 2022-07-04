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
let idBuscador = qsToObject.get ('buscar'); 

console.log(queryString,'---', qsToObject,'---', idBuscador)

fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/search/track?q='+idBuscador)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
})