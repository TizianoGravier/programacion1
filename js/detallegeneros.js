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

//nombre del genero
fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/genre/' + idGeneros )
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)

    let tituloGenero = document.querySelector('.titulo')
    tituloGenero.innerHTML = ('Artistas de ' + data.name)
})
.catch(function(error){
    console.log('el error es ' + error)
})

//artistas del genero
fetch("https://api.allorigins.win/raw?url=https://api.deezer.com/genre/"+idGeneros+ "/artists")
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)

    let artistas = document.querySelector('.artistas')
    for (let index = 0; index < data.data.length; index++) {
        
        artistas.innerHTML += 
        `<article class="cajas-generos">
        <a class="linkadetalle" href="./detalleartistas.html">${data.data[index].name}</a>
        <img src=${data.data[index].picture_medium} alt="foto de naik">
        </article>`
        
    }
})