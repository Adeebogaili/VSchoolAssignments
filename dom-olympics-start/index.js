// create an h1 and give it a class and some text and put it in the DOM.
const h1 = document.createElement("h1");
h1.textContent = "Javascript made this!!";
document.getElementById("header").appendChild(h1);
h1.className = "header";

//  create a subtitle element and give it a class and some text and put it in the DOM.
const subTitle = document.createElement("h3"); 
subTitle.innerHTML += `<span class="name">Eric</span> wrote the JavsScript`;
document.getElementById("header").appendChild(subTitle); 
subTitle.className = "sub-title"; 

/* select all divs with class message and assign a varible to it
and change all the messages using .textContent to something pleasant.*/

const messages = document.getElementsByClassName("message");

messages[0].textContent = "you're great";
messages[1].textContent = "thanks!";
messages[2].textContent = "you're welcome";
messages[3].textContent = "you're great";

// Use either method with a button to clear out the messages.

const clearButton = document.getElementById('clear-button'); 

clearButton.addEventListener('click', () => {
    for (let i = 0; i < messages.length; i++) {
        messages[i].textContent = "";
    }
}
);












