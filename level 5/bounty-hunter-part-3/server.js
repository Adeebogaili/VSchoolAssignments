const express = require("express")
const app = express()
const morgan = require("morgan")

app.use(express.json())
app.use(morgan("dev"))

//Routes
app.use("/bounties", require("./routes/bountyRouter.js"))
const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
