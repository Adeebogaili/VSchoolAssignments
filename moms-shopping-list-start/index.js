const addButton = document.querySelector(".add-button"); 
var inputText = document.querySelector(".input");
const container = document.querySelector(".container");
 

addButton.addEventListener('click', function () { 
    let newItem = inputText.value;
    inputText.value = "";

    let itemList = document.createElement('div');
    let itemName = document.createElement('input');
    let editButton = document.createElement('button');
    let removeButton = document.createElement('button');


    itemList.appendChild(itemName);
    itemName.setAttribute('value', newItem);
    itemName.classList.add('item-input');

    itemList.appendChild(editButton);
    editButton.textContent = 'EDIT';
    editButton.classList.add('edit-button');

    itemList.appendChild(removeButton);
    removeButton.textContent = 'REMOVE';
    removeButton.classList.add('remove-button')
    

    container.appendChild(itemList);
    itemList.classList.add('item');


    removeButton.addEventListener('click', function (){
        container.removeChild(itemList)
    }) 

    editButton.addEventListener('click', function() {
        itemName.contentEditable = true;
        itemName.style.backgroundColor = "#dddbdb";
      } );
})







