const xhr = new XMLHttpRequest()
        // method  // url                     // async?
xhr.open("GET", "https://swapi.dev/api/people/", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        showData(data.results)
        console.log(data.results)
    }
}

function showData(arr){
    arr.map((fullName) => {
    const h1 = document.createElement('h1')
    h1.textContent = fullName.name
    document.body.appendChild(h1)
})
}
