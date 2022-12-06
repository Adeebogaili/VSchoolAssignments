// Addition 

let addNum1 = document.getElementById('addNum1');
let addNum2 = document.getElementById('addNum2');
let addResult = document.getElementById('addResult');

document.getElementById('add').addEventListener
('click', function() {
    addResult.value = 
    parseInt(addNum1.value) + parseInt(addNum2.value);
});

// Subtraction

let subNum1 = document.getElementById('subNum1');
let subNum2 = document.getElementById('subNum2');
let subResult = document.getElementById('subResult');

document.getElementById('sub').addEventListener
('click', function() {
    subResult.value = 
    parseInt(subNum1.value) - parseInt(subNum2.value);
});

// Multiplication

let mulNum1 = document.getElementById('mulNum1');
console.log(mulNum1)
let mulNum2 = document.getElementById('mulNum2');
console.log(mulNum2)
let mulResult = document.getElementById('mulResult');
console.log(mulResult)

document.getElementById('mul').addEventListener
('click', function() {
    mulResult.value = 
    parseInt(mulNum1.value) * parseInt(mulNum2.value);
});




