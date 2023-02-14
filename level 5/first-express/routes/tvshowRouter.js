const express = require("express")
const tvShowRouter = express.Router()
const { v4: uuidv4 } = require('uuid');

const tvShows = [
    {title: "rick and morty", genre: "anime", _id: uuidv4()},
    {title: "watchman", genre: "action", _id: uuidv4()},
    {title: "westworld", genre: "fantasy", _id: uuidv4()},
    {title: "friends", genre: "comedy", _id: uuidv4()},
]

// Get All
tvShowRouter.get("/", (req, res) => {
    res.send(tvShows)
})

// Get One
tvShowRouter.get("/:tvshowId", (req, res) => {
    const tvShowId = (req.params.tvshowId)
    const foundShow = tvShows.find(tvShow => tvShow._id === tvShowId )
    res.send(foundShow)
})

// Get by Genre
tvShowRouter.get("/search/genre", (req, res) => {
    const genre = req.query.genre
    const filteredShow = tvShows.filter(show => show.genre === genre)
    res.send(filteredShow)
})

// Post One
tvShowRouter.post("/", (req, res) => {
    const newShow = req.body
    newShow._id = uuidv4()
    tvShows.push(newShow)
    res.send(`successfully added ${newShow.title} to the database!`)
})

// Delete One
tvShowRouter.delete("/:tvshowId", (req, res) => {
    const tvShowId = req.params.tvshowId
    const tvshowIndex = tvShows.findIndex(show => show._id === tvShowId)
    tvShows.splice(tvshowIndex, 1)
    res.send(`Successfully deleted ${tvShows[tvshowIndex].title}`)
})

// Edit one 
tvShowRouter.put("/:tvshowId", (req, res) => {
    const tvShowId = req.params.tvshowId
    const showIndex = tvShows.findIndex(show => show._id === tvShowId)
    const updatedShow = Object.assign(tvShows[showIndex], req.body)
    res.send(updatedShow)
})

module.exports = tvShowRouter
