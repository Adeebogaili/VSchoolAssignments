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

function listData(data) {
    clearList()

    for (let i = 0; i < data.length; i++) {

        // CREATE ELEMENTS

        // WRAPER
        const div = document.createElement('div')
        div.classList.add('item')
        container.appendChild(div)

        // CHECKBOX
        const checkBox = document.createElement('input')
        checkBox.setAttribute('type', 'checkbox')
        checkBox.classList.add('checkbox')
        checkBox.value = data[i].completed
        div.appendChild(checkBox)

        // IMAGE
        const imageUrl = document.createElement('img')
        imageUrl.setAttribute('readonly', true)
        imageUrl.classList.add('imageUrl')
        imageUrl.src = data[i].imgUrl
        div.appendChild(imageUrl)

        // TITLE
        const itemTitle = document.createElement('input')
        itemTitle.value = data[i].title
        itemTitle.classList.add('title')
        div.appendChild(itemTitle)

        // DESCRIPTION
        const itemDescription = document.createElement('input')
        itemDescription.value = data[i].description
        itemDescription.classList.add('description')
        div.appendChild(itemDescription)

        // PRICE
        const itemPrice = document.createElement('input')
        itemPrice.setAttribute('type', 'number')
        itemPrice.value = data[i].price
        itemPrice.classList.add('itemPrice')
        div.appendChild(itemPrice)

        // EDIT BUTTON
        const editButton = document.createElement('button');
        editButton.textContent = "EDIT"
        editButton.classList.add('editBtn')
        editButton.value = data[i]._id
        div.appendChild(editButton)

        // REMOVE BUTTON
        const removeButton = document.createElement('button')
        removeButton.value = data[i]._id
        removeButton.textContent = "DELETE"
        removeButton.classList.add('removeBtn')
        div.appendChild(removeButton)

        // DELETE ITEM
        removeButton.addEventListener('click', () => {
            axios
                .delete(`https://api.vschool.io/adeeb/todo/${data[i]._id}`)
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
            window.id = data[i]._id //Had to make local id global to save changes outside the list data, because my save button was making changes to all.  
            console.log(`${data[i]._id} When edit button is clicked`)
            openModal(modal)
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

        if (data[i].completed === true) {
            itemTitle.style.textDecoration = "line-through"
            itemDescription.style.textDecoration = "line-through"
            checkBox.checked = true
        }
        checkBox.addEventListener('change', () => {

            if (checkBox.checked === true) {

                const completedUpdate = {
                    completed: true
                }
                axios
                    .put(`https://api.vschool.io/adeeb/todo/${data[i]._id}`, completedUpdate)
                    .then(res => getData())
                    .catch(err => console.error(err))
            } else if (checkBox.checked === false) {

                const notCompletedUpate = {
                    completed: false
                }
                axios.put(`https://api.vschool.io/adeeb/todo/${data[i]._id}`, notCompletedUpate)
                    .then(res => getData())
                    .catch(err => console.error(err))
            }
        })
    }
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

    popUpForm.title.value = ''
    popUpForm.description.value = ''
    popUpForm.imgUrl.value = ''
    popUpForm.itemPrice.value = ''

    axios
        .put(`https://api.vschool.io/adeeb/todo/${id}`, updated)
        .then(res => getData())
        .catch(err => console.error(err))
})
