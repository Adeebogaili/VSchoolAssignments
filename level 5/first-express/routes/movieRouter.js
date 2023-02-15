const express = require("express")
const movieRouter = express.Router()
const Movie = require("../models/movie.js")

// Get All
movieRouter.get("/", (req, res, next) => {
    Movie.find((err, movies) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
    })
})

// Get One
movieRouter.get("/:movieId", (req, res, next) => {
    Movie.findOne(
        {_id: req.params.movieId},
        (err, movie) => {
          if(err){
            res.status(500)
            return next(err)
          }  
          return res.status(200).send(movie)
    })
})

// Get by Genre
movieRouter.get("/search/genre", (req, res, next) => {
    Movie.find(
        {genre: req.query.genre}, 
        (err, movies) => {
            if(err){
                res.status(500)
                return next(err)    
            }
            return res.status(200).send(movies)
    })
}) 

// Post One
movieRouter.post("/", (req, res, next) => {
    const newMovie = new Movie(req.body)
    newMovie.save((err, savedMovie) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedMovie)
    })
})

// Delete One 
movieRouter.delete("/:movieId", (req, res, next) => {
    Movie.findOneAndDelete(
        {_id: req.params.movieId},
        (err, deletedMovie) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedMovie.title} from the database.`)
    })
})

// Update one 
movieRouter.put("/:movieId", (req, res) => {
    Movie.findOneAndUpdate(
        {_id: req.params.movieId}, // find this one to update
        (req.body), // update the object
        { new: true}, // send back the updated version please
        (err, updatedMovie) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedMovie)
    })
})

// movieRouter.route("/")
//     .get((req, res) => {
//         res.send(movies)
//     })
//     .post((req, res) => {
//         const newMovie = req.body
//         newMovie._id = uuidv4()
//         movies.push(newMovie)
//         res.send(`Successfully added ${newMovie.title} to the database!`)
//     })
    
module.exports = movieRouter
