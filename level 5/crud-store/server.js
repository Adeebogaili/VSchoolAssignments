const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
require('dotenv').config()

// Middleware (for every request)
app.use(express.json())
app.use(morgan("dev"))

// Connect to DB
mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGO_URL,
() => console.log("Connected to MongoDB"))

// Routes
app.use("/inventory", require("./routes/inventoryRouter"))

// Error Handeling
app.use((err, req, res, next) => {
    console.log(err)
    res.send({errMsg: err.message})
})

const port = process.env.PORT || 8111
app.listen(port, (err) => {
    if(err) console.log("Error in server setup")
    console.log(`Server listening on port ${port}`)
})