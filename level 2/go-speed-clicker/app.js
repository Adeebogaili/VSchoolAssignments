let html = document.querySelector('html')
let display = document.getElementById("display");

display.innerHTML = localStorage.getItem('value');

let count = 0;

html.addEventListener('click', function () {
    localStorage.setItem('value', count++)
    display.innerHTML = localStorage.getItem('value');
})



 

 
   