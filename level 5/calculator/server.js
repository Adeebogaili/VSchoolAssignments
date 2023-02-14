const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res) => {

    let num1 = req.body
    res.send("Thank you for posting that")
})

const port = process.env.PORT || 8070
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})