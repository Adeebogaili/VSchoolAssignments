// create an h1 and give it a class and some text and put it in the DOM.
const h1 = document.createElement("h1");
h1.textContent = "Javascript made this!!";
document.getElementById("header").appendChild(h1);
h1.className = "header";

//  create a subtitle element and give it a class and some text and put it in the DOM.
const subTitle = document.createElement("h3");
subTitle.innerHTML += `<span class="name">Adeeb</span> wrote the JavsScript`;
subTitle.style.textAlign = "center";
document.getElementById("header").appendChild(subTitle);
subTitle.className = "sub-title";

/* select all divs with class message and assign a varible to it
and change all the messages using .textContent to something pleasant.*/

const messages = document.querySelector(".messages");
const messageText = messages.querySelectorAll("div.message");

messageText[0].textContent = "Hi there!";
messageText[1].textContent = "What's up?";
messageText[2].textContent = "How have you been?";
messageText[3].textContent = "Not much. How about you?";

//  clear chat

let count = 0

function clear() {
    messages.innerHTML = "";
    count = 0;
}
document.getElementById("clear-button").addEventListener("click", clear);

//  theme

const theme = document.querySelector('#theme-drop-down');
const lightTheme = document.querySelector('.light-theme');
const darkTheme = document.querySelector('.dark-theme');

darkTheme.onclick = function () {
    darkTheme.classList.add('.rightRed')
}


