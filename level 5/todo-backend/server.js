const express = require("express")
const {v4 : uuidv4} = require('uuid')
const morgan = require("morgan")
const app = express()

app.use(express.json())
app.use(morgan("dev"))

const todos = [
    {
        title: "Workout",
        description: "Chest Workout",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuidv4()
    }
]

// Get all Todos
app.get("/todos", (req, res) => {
    res.send(todos)
})

// Get a Single Todo
app.get("/todos/:todoId", (req, res) => {
   const todoId = req.params.todoId
   const foundTodo = todos.find(todo => todo._id === todoId)
    res.send(foundTodo)
})

// Post a todo
app.post("/todos", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send(`Sucessfully added ${newTodo.name} to the Todos List`)
})

//Delete a Todo
app.delete("/todos/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todos[todoIndex], 1)
    res.send(`Successfully deleted todo from the Todo List`)
})

// Edit a Todo
app.put("/todos/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], req.body)
    res.send(updatedTodo)
})

const port = process.env.PORT || 8030
app.listen(port, () => {
    console.log(`Express app is listening on port ${port}`)
})