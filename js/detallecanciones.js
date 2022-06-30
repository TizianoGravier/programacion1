let queryString = location.search;
let qsToObject = new URLSearchParams (queryString);
let idCancion = qsToObject.get ('id'); 

console.log(queryString,'---', qsToObject,'---', idCancion)

fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/track/'+idCancion)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)

    let sectionNombre = document.querySelector('.nombre') ;
    sectionNombre.innerHTML = 
    `<article class="nombre">
        <h2>${data.title}</h2>
    </article>;`

    let sectionArtista = document.querySelector('.artista')
    sectionArtista.innerHTML = 
    `<article>
        <a class="artista" href="./detalleartistas.html">${data.artist.name}</a>
    </article>`

    let sectionFoto = document.querySelector('.foto')
    sectionFoto.innerHTML = 
    `<article class="foto">
        <img src=${data.album.cover} alt="duketo">
    </article>`

})

