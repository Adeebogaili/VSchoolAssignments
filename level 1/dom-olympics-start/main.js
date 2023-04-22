// create an h1 and give it a class and some text and put it in the DOM.
const h1 = document.createElement('h1');
h1.textContent = 'Javascript made this!!';
document.getElementById('header').appendChild(h1);
h1.className = 'header';

//  create a subtitle element and give it a class and some text and put it in the DOM.
const subTitle = document.createElement('h3');
subTitle.className = 'sub-title';
subTitle.innerHTML += `<span class="name">Adeeb</span> wrote the JavsScript`;
document.getElementById('header').appendChild(subTitle);

// chat
const messagesContainer = document.getElementById('messages-container');
const messageForm = document.forms['message-form'];
const messageInput = document.querySelector('input[name="message-input"]');
const submitButton = document.querySelector('button[type="submit"]');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const userWrapper = document.createElement('div')
    userWrapper.className = 'user-wrapper'
    const username = document.createElement('p')
    username.className = 'username'
    const message = document.createElement('p');
    message.className = 'message';
    message.textContent = messageInput.value;
    userWrapper.appendChild(username)
    userWrapper.appendChild(message)
    messagesContainer.appendChild(userWrapper);
    messageInput.value = ''
    // add class based on index
    const allMessages = document.querySelectorAll('.message');
    const messagesArray = Array.from(allMessages);
    messagesArray.forEach((message, index) => {
      if (index % 2 === 0) {
        username.textContent = "Adeeb"
        userWrapper.classList.add('wrapper-right')
        userWrapper.classList.remove('wrapper-left')
        message.classList.add('message-right');
        message.classList.remove('message-left');
      } else {
        username.textContent = "Joseph"
        userWrapper.classList.add('wrapper-left')
        userWrapper.classList.remove('wrapper-right')
        message.classList.add('message-left');
        message.classList.remove('message-right');
      }
    });
  });
  

//  clear
const clearButton = document
  .getElementById('clear-button')
  .addEventListener('click', () => {
    while (messagesContainer.firstChild) {
      messagesContainer.removeChild(messagesContainer.firstChild);
    }
  });

//  theme
const theme = document.querySelector('#theme-drop-down');
document.getElementById('main').style.backgroundColor = '#1877F2';
document.getElementById('messages-container').style.backgroundColor = '#8B4513';
document.getElementById('messages-container').style.color = '#fff';

theme.addEventListener('click', () => {
  if (theme.value === 'theme-one') {
    document.getElementById('main').style.backgroundColor = '#1877F2';
    document.getElementById('messages-container').style.backgroundColor =
      '#8B4513';
  } else if (theme.value === 'theme-two') {
    document.getElementById('main').style.backgroundColor = 'red';
    document.getElementById('messages-container').style.backgroundColor =
      'black';
  }
});
