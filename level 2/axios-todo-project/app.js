const container = document.querySelector(".container")
const titleInput = document.querySelector(".titleInput")

// GET THE GROCERY'S DATA FROM THE DATABASE

function getData() {
    axios
        .get("https://api.vschool.io/adeeb/todo/")
        .then(res => listData(res.data))
        .catch(err => console.error(err))
}

// LISTS THE GROCERY TITLES TO THE DOM

function listData(dataBase) {
    clearList()

    // CREATE ELEMENTS USING MAP()
    dataBase.map((data) => {

        // LIST WRAPPER
        const div = document.createElement('div')
        div.classList.add('item-list')
        container.appendChild(div)

        //  DIV TO WRAP CHECKBOX, IMAGE, TILTE AND DESCRIPTION
        const leftWrapper = document.createElement('div')
        leftWrapper.classList.add('leftWrapper')
        div.appendChild(leftWrapper)

        // CHECKBOX
        const checkBox = document.createElement('input')
        checkBox.setAttribute('type', 'checkbox')
        checkBox.classList.add('checkbox')
        checkBox.value = data.completed
        leftWrapper.appendChild(checkBox)

        // IMAGE
        const imageUrl = document.createElement('img')
        imageUrl.setAttribute('readonly', true)
        imageUrl.classList.add('imageUrl')
        imageUrl.src = data.imgUrl
        leftWrapper.appendChild(imageUrl)

        // DETAILS DIV TO WRAP TILTE AND DESCRIPTION
        const details = document.createElement('div')
        details.classList.add('item-details')
        leftWrapper.appendChild(details)

        // TITLE
        const itemTitle = document.createElement('h3')
        itemTitle.textContent = data.title
        itemTitle.classList.add('title')
        details.appendChild(itemTitle)

        // DESCRIPTION
        const itemDescription = document.createElement('p')
        itemDescription.textContent = data.description
        itemDescription.classList.add('description')
        details.appendChild(itemDescription)

        // PRICE
        const itemPrice = document.createElement('p')
        itemPrice.textContent = data.price
        itemPrice.classList.add('price-list')
        details.appendChild(itemPrice)

        // DIV TO WRAP BUTTONS
        const buttons = document.createElement('div')
        buttons.classList.add('buttons')
        div.appendChild(buttons)

        // EDIT BUTTON
        const editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fa-regular fa-pen-to-square" aria-hidden="true"></i>'
        editButton.classList.add('editBtn')
        editButton.value = data._id
        buttons.appendChild(editButton)

        // REMOVE BUTTON
        const removeButton = document.createElement('button')
        removeButton.value = data._id
        removeButton.innerHTML = '<i class="fa-regular fa-trash-can aria-hidden="true""></i>'
        removeButton.classList.add('removeBtn')
        buttons.appendChild(removeButton)

        // DELETE ITEM
        removeButton.addEventListener('click', () => {
            axios
                .delete(`https://api.vschool.io/adeeb/todo/${data._id}`)
                .then(res => console.log(res))
                .catch(err => (console.log(err)))
            container.removeChild(div)

        })

        itemTitle.disabled = true
        itemDescription.disabled = true

        // CREATE POPUP FORM WHEN EDIT BUTTON IS CLICKED
        const popUpForm = document.popUpForm
        const overlay = document.getElementById("overlay")
        const modal = document.getElementById("modal")
        const closeButton = document.querySelector(".closeBtn")

        editButton.addEventListener('click', () => {
            window.id = data._id //Had to make local id global to save changes outside the list data, because my save button was making changes to all.  
            console.log(`${data._id} When edit button is clicked`)
            openModal(modal)

            popUpForm.title.value = data.title
            popUpForm.description.value = data.description
            popUpForm.imgUrl.value = data.imgUrl
            popUpForm.itemPrice.value = data.price
        })

        closeButton.addEventListener('click', () => {
            closeModal(modal)
        })

        function openModal(modal) {
            if (modal == null) return
            modal.classList.add('active')
            overlay.classList.add('active')
        }

        function closeModal(modal) {
            if (modal == null) return
            modal.classList.remove('active')
            overlay.classList.remove('active')
        }

        if (data.completed === true) {
            itemTitle.style.textDecoration = "line-through"
            itemTitle.style.textDecorationColor = "#c0303f"
            itemDescription.style.textDecoration = "line-through"
            itemDescription.style.textDecorationColor = "#c0303f"
            itemPrice.style.textDecoration = "line-through"
            itemPrice.style.textDecorationColor = "#c0303f"

            checkBox.checked = true
        }
        checkBox.addEventListener('change', () => {

            if (checkBox.checked === true) {

                const completedUpdate = {
                    completed: true
                }
                axios
                    .put(`https://api.vschool.io/adeeb/todo/${data._id}`, completedUpdate)
                    .then(res => getData())
                    .catch(err => console.error(err))
            } else if (checkBox.checked === false) {

                const notCompletedUpate = {
                    completed: false
                }
                axios.put(`https://api.vschool.io/adeeb/todo/${data._id}`, notCompletedUpate)
                    .then(res => getData())
                    .catch(err => console.error(err))
            }
        })
    })
}

// CLEAR LIST
function clearList() {
    const el = document.querySelector('.container')
    while (el.firstChild) {
        el.removeChild(el.firstChild)
    }
}

getData()

// FORM FOR THE POST REQUEST
const todoForm = document.todoform

todoForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value,
        price: todoForm.itemPrice.value,
        completed: false
    }

    todoForm.title.value = ''
    todoForm.description.value = ''
    todoForm.imgUrl.value = ''
    todoForm.itemPrice.value = ''

    axios
        .post('https://api.vschool.io/adeeb/todo', newTodo)
        .then(res => getData())
        .catch(err => console.error(err))
})

// EDIT AND UPDATE DATABASE WITH SAVE
const saveButton = document.querySelector('.saveBtn')

saveButton.addEventListener('click', (event) => {

    console.log(`${id} When save button is clicked`)
    event.preventDefault()

    const updated = {
        title: popUpForm.title.value,
        description: popUpForm.description.value,
        imgUrl: popUpForm.imgUrl.value,
        price: popUpForm.itemPrice.value,
        completed: false
    }

    axios
        .put(`https://api.vschool.io/adeeb/todo/${id}`, updated)
        .then(res => getData())
        .catch(err => console.error(err))
})