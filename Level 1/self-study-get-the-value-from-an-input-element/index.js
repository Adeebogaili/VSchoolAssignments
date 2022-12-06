const input = document.getElementById("name");
const button = document.getElementById("btn1");
const output = document.getElementById('output1');

function fun1 () {
    output.innerHTML = input.value;
}

button.addEventListener("click", fun1);
