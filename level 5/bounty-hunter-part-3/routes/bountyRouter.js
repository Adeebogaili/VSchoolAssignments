const express = require("express")
const bountyRouter = express.Router()
const {v4 : uuidv4} = require('uuid')


const bounties = [
    {firstName: "Luke", lastName: "Skywalker", living: true, type: "Jedi", bountyAmount: 950, _id: uuidv4()},
    {firstName: "Yoda", lastName: "Yoda", living: true, type: "Jedi", bountyAmount: 900, _id: uuidv4()},
    {firstName: "Count", lastName: "Dooku", living: false, type: "Sith", bountyAmount: 500, _id: uuidv4()},
    {firstName: "Anakin", lastName: "Skywalker", living: true, type: "Sith", bountyAmount:1000,  _id: uuidv4()}
    ]
    
    // Get all Bounties
    bountyRouter.get("/", (req, res) => {
        res.send(bounties)
    })
    
    // Get one Bounty
    bountyRouter.get("/:bountyId", (req, res) => {
        const bountyId = req.params.bountyId
        const foundBounty = bounties.find(bounty => bounty._id === bountyId)
        res.send(foundBounty)
    })
    
    // Post Bounty
    bountyRouter.post("/", (req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        res.send(newBounty)
    })
    
    // Delete Bounty
    bountyRouter.delete("/:bountyId", (req, res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        bounties.splice(bountyIndex, 1)
        res.send(`Successfully deleted bounty`)
    })
    
    // Update Bounty
    bountyRouter.put("/:bountyId", (req, res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
        res.send(updatedBounty)
    })

    module.exports = bountyRouter

