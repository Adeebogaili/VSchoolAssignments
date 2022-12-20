const xhr = new XMLHttpRequest()
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200){
       const JSONdata = xhr.responseText
       const data = JSON.parse(JSONdata)
       showData(data.objects[0].pokemon)
       console.log(data.objects[0].pokemon)

    }
}

function showData(arr){
    arr.map((pokemonName) => {
        const h1 = document.createElement('h1')
        const par = document.createElement('p')
        h1.textContent = pokemonName.name
        par.textContent = pokemonName
        document.body.appendChild(h1)
    })
}
