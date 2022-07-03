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

    let sectionArriba = document.querySelector('.arriba')
    sectionArriba.innerHTML = `
    <section class="nombreyartista">
        <article class="nombre">
            <h2>${data.title}</h2>
        </article> 

        <article>
            <a class="artista" href="./detalleartistas.html?id=">${data.artist.name}</a>
        </article>

        
    </section>`
    
    let sectionAbajo = document.querySelector('.abajo')
    sectionAbajo.innerHTML = `
    <article class="foto">
        <img src=${data.album.cover} alt="duketo">
    </article>

    <article class="nombreDisco">
            <h3>${data.album.title}</h3>
    </article>

    <article class="player">
        <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${data.id}" width="400" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
    </article> `

    

})

