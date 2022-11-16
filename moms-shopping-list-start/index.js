const addButton = document.querySelector(".add-button");
var inputText = document.querySelector(".input");
const container = document.querySelector(".container");



function addNewItem() {
    if (inputText.value === '') {
        return null
    } else {
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


        removeButton.addEventListener('click', function () {
            container.removeChild(itemList)
        })

        editButton.addEventListener('click', function () {
            itemName.contentEditable = true;
            itemName.style.backgroundColor = "#dddbdb";
        });
    }
}

addButton.addEventListener('click', () => {
    addNewItem();
})

inputText.addEventListener('keyup', (event) => {
    if (event.which === 13) {
        addNewItem();
    }
})

