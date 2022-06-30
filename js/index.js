//canciones

fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)

        let info = data.data

        //capturar el contenedor
            let sectionCanciones = document.querySelector('.canciones')
            let canciones = ''

        for (let index = 0; index < 5; index++) {

           canciones += `<article class="cajas-inicio">

           <a class="linkadetalle" href="./detallecanciones.html?id=${info[index].id}">${info[index].title}</a>
           
           <img src=${info[index].artist.picture} alt="cover de she dont give a Fo">

        </article>`
        }
        //console.log(canciones)

        sectionCanciones.innerHTML += canciones

    })
    .catch(function(error){
        console.log('el error es ' + error)
    })

//albumes
fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/albums')
    .then(function(response){
    return response.json()
    })
    .then(function(data){
    console.log(data)

    let info = data.data

    //campturar el contenedor
    let sectionAlbumes = document.querySelector('.albumes')
    let albumes = ''

    for (let index = 0; index < 5; index++) {
        
        albumes += `<article class="cajas-inicio">

            <a class="linkadetalle" href="./detallealbums.html?id${info[index].id}">${info[index].title}</a>
        
            <img src=${info[index].cover} alt="cover de Parachutes">
        </article>`
    }

    //console.log(albumes)
    sectionAlbumes.innerHTML += albumes

    })

//artistas
fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/artists')
    .then(function(response){
    return response.json()
    })
    .then(function(data){
    console.log(data)

    let info = data.data

    //campturar el contenedor
    let sectionArtistas = document.querySelector('.artistas')
    let artistas = ''

    for (let index = 0; index < 5; index++) {
        
        artistas += `<article class="cajas-inicio">

            <a class="linkadetalle" href="./detalleartistas.html?id${info[index].id}">${info[index].name}</a>

            <img src=${info[index].picture} alt="foto de naik">
        </article>`
    }

    console.log(artistas)
    sectionArtistas.innerHTML += artistas
    

    })