fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/genre')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)

    let info = data.data
    let listaGeneros = document.querySelector('.lista')
    
    for (let index = 0; index < info.length; index++) {
        
        listaGeneros.innerHTML += `
        <li>
        <a class="link" href="./detallegeneros.html?id=">${info[index].name}</a>
        </li>
        
        <img src=${info[index].picture} alt="fotosGeneros">`
    }
    
    listaGeneros.style.display = "flex"
    listaGeneros.style.flexWrap = "wrap"
})
.catch(function(error){
    console.log('el error es ' + error)
})