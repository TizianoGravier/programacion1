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
let idArtistas = qsToObject.get ('id'); 

console.log(queryString,'---', qsToObject,'---', idArtistas)

fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/artist/'+idArtistas)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)

    let nombreArtista = document.querySelector('.titulo')
    nombreArtista.innerHTML = `<h2 class="titulo">${data.name}</h2>`

    let fotoArtista = document.querySelector('.foto')
    fotoArtista.innerHTML = `<article class="foto">
    <img src=${data.picture} alt="foton de Coldplay">
    </article>`

    let tracklist = document.querySelector('.lista')
    tracklist.innerHTML = `<ol class="lista">
    <li>${data.tracklist}</li>
    </ol>`
})
