const express = require("express")
const app = express()
const morgan = (require("morgan"))
const mongoose = require("mongoose")
require('dotenv').config()

// Middleware (for every request) //
app.use(express.json()) // Looks for a request body, and it turns it into "req.body"
app.use(morgan("dev"))

// Connect to DB
mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGO_URL,
() => console.log("Connected to MongoDB")
)

// Routes //
app.use("/movies", require("./routes/movieRouter.js"))
app.use("/tvshows", require("./routes/tvshowRouter.js"))

// Error Handling //
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// Server Listen //
app.listen(9000, () => {
    console.log("The server is running on port 9000")
})
