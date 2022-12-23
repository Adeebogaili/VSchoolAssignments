const container = document.querySelector(".container");
const todoForm = document.todoform


todoForm.addEventListener("submit", function(event){
    event.preventDefault()

    const newPost = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    }

// POST REQUEST
    axios.post("https://api.vschool.io/adeeb/todo", newPost) 
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
}) 

// GET ALL

axios.get("https://api.vschool.io/adeeb/todo/")
.then(response => {

    for(let i = 0; i < response.data.length; i++){

        // CREATE HTML 
        const div = document.createElement('div')
        const todoTitle = document.createElement('input')
        const todoDescription = document.createElement('input')
        const checkBox = document.createElement('input')
        const editButton = document.createElement('button');
        const removeButton = document.createElement('button')

        todoTitle.value = response.data[i].title
        todoTitle.setAttribute('readonly', true)
        todoTitle.classList.add('title')

        todoDescription.value = response.data[i].description
        todoDescription.setAttribute('readonly', true)
        todoDescription.classList.add('description')

        removeButton.value = response.data[i]._id
        removeButton.textContent = "DELETE"
        removeButton.classList.add('removeBtn')

        checkBox.setAttribute('type', 'checkbox')
        checkBox.classList.add('checkbox')

        editButton.textContent = "EDIT"
        editButton.classList.add('editBtn')

        container.appendChild(div)
        div.classList.add('item')

        // APPEND ALL
        div.appendChild(todoTitle)
        div.appendChild(todoDescription)
        div.appendChild(checkBox)
        div.appendChild(editButton)
        div.appendChild(removeButton) 

    
        removeButton.addEventListener('click', () => {
            axios
                .delete(`https://api.vschool.io/adeeb/todo/${response.data[i]._id}`)
                .then(res => console.log(res))
                .catch(err => (console.log(err)))
                container.removeChild(div)

        } )

        editButton.addEventListener('click', () => {

        const edited = {
        title: "changed",
        description: par.value,
        imgUrl: todoForm.imgUrl.value
        }
         axios
            .put(`https://api.vschool.io/adeeb/todo/${response.data[i]._id}`, edited)
            .then(res => console.log(res))
            .catch(err => (console.log(err)))

} )
    }
})
.catch(error => console.log(error))
