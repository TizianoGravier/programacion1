let queryString = location.search
let qsToObject = new URLSearchParams (queryString)
let idAlbum = qsToObject.get ('id')

console.log(queryString, '---', qsToObject, '---', idAlbum)

fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/album/'+idAlbum)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)

    let nombreDisco = document.querySelector('.nombre')
    nombreDisco.innerHTML = 
    `<article class="nombre">
        <h2>${data.title}</h2>
    </article>` 

    let nombreArtista = document.querySelector('.artista')
    nombreArtista.innerHTML = 
    `<article>
        <a class="artista" href="./detalleartistas.html">${data.artist.name}</a>
    </article>`

    let fotoDisco = document.querySelector('.foto')
    fotoDisco.innerHTML =
    `<article class="foto">
        <img class="img" src=${data.cover} alt="">
    </article>`

    let temasDisco = document.querySelector('.temasDisco')
    //let info = data.tracks
    for (let index = 0; index < data.tracks.data.length; index++) {
        
        temasDisco.innerHTML += `<ol>
        <li>${data.tracks.data[index].title}</li>
        </ol>`
        console.log(data.tracks.data[index].title)
    }

})
.catch(function(error){
    console.log('el error es '+ error)
})