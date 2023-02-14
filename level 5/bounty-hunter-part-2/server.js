const express = require("express")
const app = express()
const {v4 : uuidv4} = require('uuid')
const morgan = require("morgan")

app.use(express.json())
app.use(morgan("dev"))

const bounties = [
{firstName: "Luke", lastName: "Skywalker", living: true, type: "Jedi", _id: uuidv4()},
{firstName: "Yoda", lastName: "Yoda", living: true, type: "Jedi", _id: uuidv4()},
{firstName: "Count", lastName: "Dooku", living: false, type: "Sith", _id: uuidv4()},
{firstName: "Anakin", lastName: "Skywalker", living: true, type: "Sith", _id: uuidv4()}
]

// Get all Bounties
app.get("/bounties", (req, res) => {
    res.send(bounties)
})

// Get one Bounty
app.get("/bounties/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})

// Post Bounty
app.post("/bounties", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName}`)
})

// Delete Bounty
app.delete("/bounties/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send(`Successfully deleted bounty`)
})

// Update Bounty
app.put("/bounties/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounty)
})

const port = process.env.PORT || 8040
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
