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

    let nombreYArtista = document.querySelector('.nombreyartista')
    nombreYArtista.innerHTML = `
    <article class="barraArriba">
        <h2>${data.title}</h2>
    </article>

    <article class="barraArriba">
        <a class="artista" href="./detalleartistas.html">${data.artist.name}</a>
    </article>
    
    <article class="barraArriba">
        <h3>${data.genres.data[0].name}</h3>
    </article>
    
    <article class="barraArriba">
        <p>Released: ${data.release_date}</p>
    </article>`


    let fotoDisco = document.querySelector('.foto')
    fotoDisco.innerHTML =
    `<article class="foto">
        <img class="img" src=${data.cover} alt="">
    </article>`

    let temasDisco = document.querySelector('.temasDisco')
    //let info = data.tracks
    for (let index = 0; index < data.tracks.data.length; index++) {
        
        temasDisco.innerHTML += `
        <li>${data.tracks.data[index].title}</li>
        `
        
    }

})
.catch(function(error){
    console.log('el error es '+ error)
})