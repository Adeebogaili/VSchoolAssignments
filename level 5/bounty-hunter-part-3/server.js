const express = require("express")
const app = express()
const morgan = require("morgan")

// Middleware (for every request) //
app.use(express.json())
app.use(morgan("dev"))

// Routes //
app.use("/bounties", require("./routes/bountyRouter.js"))

// Error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// Server Listen //
const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
