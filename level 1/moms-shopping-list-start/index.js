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

        container.appendChild(itemList);
        itemList.classList.add('item');

        itemList.appendChild(itemName);
        itemName.setAttribute('value', newItem); 
        itemName.classList.add('item-input');

        itemList.appendChild(editButton);
        editButton.textContent = 'EDIT';
        editButton.classList.add('edit-button');

        itemList.appendChild(removeButton);
        removeButton.textContent = 'REMOVE';
        removeButton.classList.add('remove-button')

        removeButton.addEventListener('click', function () {
            container.removeChild(itemList)
        });

        itemName.disabled = true
        editButton.addEventListener('click', function () {
            itemName.disabled = false

            itemName.style.backgroundColor = "#dddbdb";
            itemName.style.padding = "0.5rem 1rem";
            itemName.style.height = "35px";
            itemName.style.outline = "none";
            itemName.style.backgroundColor = "#fff"
            itemName.style.color = "black";
            itemName.style.borderRadius = "25px";

            if (inputText.contentEditable == "true") {
                itemName.disabled = true

                itemName.style.backgroundColor = null;
                itemName.style.padding = null;
                itemName.style.height = null;
                itemName.style.outline = null;
                itemName.style.backgroundColor = null;
                itemName.style.color = null;
                itemName.style.borderRadius = null;
                inputText.contentEditable = "false";
                editButton.innerHTML = 'EDIT';
            } else {
                itemName.disabled = false
                inputText.contentEditable = "true";
                editButton.innerHTML = 'SAVE';
            }
        })

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