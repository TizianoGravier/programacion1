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

//recuperar el array del storage
let recuperoStorage = localStorage.getItem('favoritos')
recuperoStorageArray = JSON.parse(recuperoStorage)

let sectionFavoritos = document.querySelector('.favoritos')

//pido a la api los datos de los ids
for (let index = 0; index < recuperoStorageArray.length; index++) {
    
    fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/track/' + recuperoStorageArray[index])
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)

        sectionFavoritos.innerHTML += `
        <li> <a href="./detallecanciones.html?id=${data.id}">${data.title}</a>, <a href="./detalleartistas.html?id=${data.artist.id}">${data.artist.name} </a></li>`
    })
    
}