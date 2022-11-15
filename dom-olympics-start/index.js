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

// send

function messagesCSS(count) {
    if (count % 2 === 0) {
        return 'message left'
    } else {
        return 'message right'
    }
}

function userInput(event) {
    event.preventDefault()
    
    const newMessage = document.getElementById("textInput").value;
    if (newMessage.length < 1) {
        return null;
    } else {
        document.querySelector(".messages").innerHTML += `<div class = "${messagesCSS(count)}"> ${newMessage} </div>`
        document.getElementById("textInput").value = ""
    }
    count++
}

var form = document.message
form.addEventListener("submit", userInput)

// theme

var dropdown = document.getElementById("theme-drop-down")
dropdown.addEventListener("change", themeFunction)

function themeFunction (){
    var messageText = messages.querySelectorAll("div.message");
    if (dropdown.value == "theme-two") {
        for (i = 0; i < messageText.length; i++) {
            if (i % 2 === 0) {
                messageText[i].style.backgroundColor = "black"
                messageText[i].style.color = "white"
            } else {
                messageText[i].style.backgroundColor = "red"
            }
        }
    } else if (dropdown.value == "theme-one"){
        for (i = 0; i < messageText.length; i++) {   
        if (i % 2 === 0) {
            messageText[i].style.color = "black";
            messageText[i].style.backgroundColor = "burlywood";
        }
        else {
        messageText[i].style.backgroundColor = "lightblue";
        
        }
        }

    }
} 
