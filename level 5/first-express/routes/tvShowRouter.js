const express = require("express")
const tvshowRouter = express.Router()
const { v4: uuidv4 } = require('uuid');

const tvShows = [
    {title: "rick and morty", genre: "sci-fi", _id: uuidv4()},
    {title: "watchman", genre: "action", _id: uuidv4()},
    {title: "westworld", genre: "fantasy", _id: uuidv4()},
    {title: "friends", genre: "comedy", _id: uuidv4()},
]

// Get all
tvshowRouter.get("/", (req, res) => {
    res.send(tvShows)
})

// Get one 
tvshowRouter.get("/:id", (req, res) => {
    console.log(req)
})

// Get by genre
tvshowRouter.get("/search/genre", (req, res) => {
    console.log(req)
})

tvshowRouter.post("/", (req, res) => {
    const newShow = req.body
    newShow._id = uuidv4()
    tvShows.push(newShow)
    res.send(`successfully added ${newShow.title} to the database!`)
})

module.exports = tvshowRouter
