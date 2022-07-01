fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/genre')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)

    let listaGeneros = document.querySelector('.lista')
    
    for (let index = 0; index < data.data.length; index++) {
        
        listaGeneros.innerHTML += `<ul>
        <li>
        <a class="link" href="./detallegeneros.html?id=">${data.data[index].name}</a>
        </li>
        </ul>
        <img src=${data.data[index].picture} alt="fotosGeneros">`
    }
    
    
})
.catch(function(error){
    console.log('el error es ' + error)
})