const express = require("express")
const app = express()
const { v4: uuidv4 } = require('uuid');

//Middleware (for every request)
app.use(express.json())

// Bounties data
const bounties = [
{firstName: "Luke", lastName: "Skywalker", living: true, type: "Jedi", _id: uuidv4()},
{firstName: "Aloysius", lastName: "Kallig", living: true, type: "Sith", _id: uuidv4()},
{firstName: "Qui-Gon", lastName: "Jinn", living: true, type: "Jedi", _id: uuidv4()},
{firstName: "Count", lastName: "Dooku", living: false, type: "Sith", _id: uuidv4()},
]    

// Get all Bounties
app.get("/bounties", (req, res) => {
    res.send(bounties)
})

// Get one
app.get("/bounties/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId;
    const foundBounty = bounties.find(bounty => bounty._id === bountyId);
    if (!foundBounty) return res.status(404).send("Bounty not found");
    res.send(foundBounty);
});

//Post 
app.post("/bounties", (req, res) => {
    newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database!`)
})

// Delete One
app.delete("/bounties/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId;
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    if (bountyIndex === -1) return res.status(404).send("Bounty not found")
    const deletedBounty = bounties.splice(bountyIndex, 1)
    res.send(`Successfully deleted ${deletedBounty[0].firstName} ${deletedBounty[0].lastName} from the database!`)
});

//Edit One 
app.put("/bounties/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    if (bountyIndex === -1) return res.status(404).send("Bounty not found")
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounty)
})

// Express Listen
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});