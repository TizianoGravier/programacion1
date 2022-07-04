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


let queryString = location.search; //obtengo la qs
let qsToObject = new URLSearchParams (queryString); //objeto literal basado en la qs
let idCancion = qsToObject.get ('id'); //obtengo el id de la canción

console.log(queryString,'---', qsToObject,'---', idCancion)

fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/track/'+idCancion)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)

    let sectionArriba = document.querySelector('.nombreyartista')
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


    //guardar en favoritos
    let favoritos = [ ]

    //chequeo si hay algo en favoritos
    let recuperoStorage = localStorage.getItem('favoritos')
    console.log(recuperoStorage)

    if(recuperoStorage){ ////null o undefined => false //tiene una variable => true
        let favoritosArray = JSON.parse(recuperoStorage)
        favoritos = favoritosArray
        
    }

    let linkFav = document.querySelector('.agregarFav')

    if(favoritos.includes(idCancion)){ //para que cambie el texto si la cancion ya esta en favoritos
        linkFav.innerHTML = "Sacar de favoritos"
    }

    //definir un evento para el link a favoritos
    linkFav.addEventListener('click',function(evento){
        evento.preventDefault()

        if(favoritos.includes(idCancion)){ //si ya esta en el array, lo saco y cambio el texto
            let sacarCancion = favoritos.indexOf(idCancion)
            favoritos.splice(sacarCancion,1)
            linkFav.innerHTML = "Agregar a favoritos"

        }else{ //si no esta en el array, lo agrega y cambio el texto
            favoritos.push(idCancion)
            linkFav.innerHTML = "Sacar de favoritos"
        }

        //Pasar el array a string para agregarlo al localStorage
        let cancionesFavoritasString = JSON.stringify(favoritos)
        localStorage.setItem('favoritos', cancionesFavoritasString)

        console.log(localStorage.getItem('favoritos'))

        
    })
})