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

    let tituloBusqueda = document.querySelector('.titulo')
    tituloBusqueda.innerHTML = ('Resultados de ' + idBuscador)

    let resultadoBusqueda = document.querySelector('.resultados')
    for (let index = 0; index < data.data.length; index++) {
        
        resultadoBusqueda.innerHTML += 
        `<article class="cajas-inicio">
            <a class="linkadetalle" href="./detallecanciones.html?id=${data.data[index].id}">${data.data[index].title}</a> 
            <br> 
            <a class="linkadetalle" href="./detalleartistas.html?id=${data.data[index].artist.id}">${data.data[index].artist.name} </a> 
            <br> 
            <a class="linkadetalle" href="./detallealbums.html?id=${data.data[index].album.id}">${data.data[index].album.title}</a> 
        
            <img src="${data.data[index].album.cover_medium}" alt="">
            <br>
        </article>`
        
        
    }
    
    
})