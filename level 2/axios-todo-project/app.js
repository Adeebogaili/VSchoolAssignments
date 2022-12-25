const container = document.querySelector(".container")
const popUpForm = document.popUpForm
const titleInput = document.querySelector(".titleInput")

// GET THE TODO'S DATA FROM THE DATABASE

function getData() {
    axios
        .get("https://api.vschool.io/adeeb/todo/")
        .then(res => listData(res.data))
        .catch(err => console.error(err))
}

// LISTS THE TODO TITLES TO THE DOM

function listData(data) {
    clearList()

    for (let i = 0; i < data.length; i++) {

        // CREATE ELEMENTS
        const div = document.createElement('div')
        const itemTitle = document.createElement('input')
        const itemDescription = document.createElement('input')
        const itemPrice = document.createElement('input')
        const imageUrl = document.createElement('img')
        const checkBox = document.createElement('input')
        const editButton = document.createElement('button');
        const removeButton = document.createElement('button')
        const saveButton = document.createElement('button')

        itemTitle.value = data[i].title
        itemTitle.classList.add('title')

        itemDescription.value = data[i].description
        itemDescription.classList.add('description')

        itemPrice.value = data[i].price
        itemPrice.classList.add('itemPrice')
        itemPrice.setAttribute('type', 'number')

        imageUrl.setAttribute('readonly', true)
        imageUrl.classList.add('imageUrl')
        imageUrl.src = data[i].imgUrl

        removeButton.value = data[i]._id
        removeButton.textContent = "DELETE"
        removeButton.classList.add('removeBtn')

        checkBox.setAttribute('type', 'checkbox')
        checkBox.classList.add('checkbox')
        checkBox.value = data[i].completed

        editButton.textContent = "EDIT"
        editButton.classList.add('editBtn')
        editButton.value = data[i]._id

        saveButton.textContent = "SAVE"
        saveButton.classList.add('saveBtn')
        saveButton.value = data[i]._id

        container.appendChild(div)
        div.classList.add('item')

        // APPEND ALL
        div.appendChild(checkBox)
        div.appendChild(imageUrl)
        div.appendChild(itemTitle)
        div.appendChild(itemDescription)
        div.appendChild(itemPrice)
        div.appendChild(editButton)
        div.appendChild(removeButton)
        popUpForm.appendChild(saveButton)

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

        // EDIT ITEM

        const closeButton = document.querySelector(".closeBtn")
        const overlay = document.getElementById("overlay")
        const modal = document.getElementById("modal")

        editButton.addEventListener('click', () => {
            console.log(data[i]._id)
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

        // UPDATE DATABASE WITH SAVE

        saveButton.addEventListener('click', (event) => {
            event.preventDefault()


            const updated = {
                title: popUpForm.title.value,
                description: popUpForm.description.value,
                imgUrl: popUpForm.imgUrl.value,
                price: popUpForm.itemPrice.value,
                completed: false
            }
            console.log(data[i]._id)

            axios
                .put(`https://api.vschool.io/adeeb/todo/${data[i]._id}`, updated)
                .then(res => getData())
                .catch(err => console.error(err))
        })

        // CHECKBOX CHECK
        // if (checkBox.checked) {
        //     itemTitle.style.textDecoration = "line-through"
        //     itemDescription.style.textDecoration = "line-through"

        //     const checked = {
        //     completed: true,
        //     title: itemTitle.value,
        //     description: itemDescription.value,
        //     imageUrl: imageUrl.value,
        //     price: itemPrice.value,
        //     }
        //     axios
        //         .put(`https://api.vschool.io/adeeb/todo/${data[i]._id}`, checked)
        //         .catch(err => console.error(err))
        // } else {

        //     itemTitle.style.textDecoration = "none"
        //     itemDescription.style.textDecoration = "none"

        //     const notChecked = {
        //     completed: false,
        //     title: itemTitle.value,
        //     description: itemDescription.value,
        //     imageUrl: imageUrl.value,
        //     price: itemPrice.value,
        //     }
        //     axios
        //         .put(`https://api.vschool.io/adeeb/todo/${data[i]._id}`, notChecked)
        //         .catch(err => console.error(err))
        // }

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

    axios
        .post('https://api.vschool.io/adeeb/todo', newTodo)
        .then(res => getData())
        .catch(err => console.error(err))
})