// gloabal variables
let goombasNumber = document.getElementById('goombas-number');
let bobsNumber = document.getElementById('bobs-number');
let cheepNumber = document.getElementById('cheep-number');
let goombasPrice = document.getElementById('goombas-price');
let bobsPrice = document.getElementById('bobs-price');
let cheepsPrice = document.getElementById('cheeps-price');
let totalPrice = document.getElementById('total-price');
let calculate = document.getElementById('calculate');

// calculation
function total(event){
    
    event.preventDefault();

    let goombasTotal = parseInt(goombasNumber.value) * 5;
    goombasPrice.value = goombasTotal + " Coins";

    let bobsTotal = parseInt(bobsNumber.value) * 7;
    bobsPrice.value = bobsTotal + " Coins";

    let cheepsTotal = parseInt(cheepNumber.value) * 11;
    cheepsPrice.value = cheepsTotal + " Coins";

    totalPrice.value = goombasTotal + bobsTotal + cheepsTotal + " Coins";
};

calculate.addEventListener('click', total )


