const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
require("dotenv").config()

// Middleware (for every request) //
app.use(express.json())
app.use(morgan("dev"))

// Connect to DB
mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGO_URL,
() => console.log("Connected to MongoDB"))

// Routes //
app.use("/bounties", require("./routes/bountyRouter.js"))

// Error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// Server Listen //
const port = process.env.PORT || 8222
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})