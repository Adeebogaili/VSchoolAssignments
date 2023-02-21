const express = require("express")
const bountyRouter = express.Router()
const Bounty = require("../models/bounty")
    
    // Get all Bounties
    bountyRouter.get("/", (req, res, next) => {
        Bounty.find((err, bounties) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(bounties)
        })
    })
    
    // Get one Bounty
    bountyRouter.get("/:bountyId", (req, res, next) => {
        Bounty.findOne({_id: req.params.bountyId}, (err, foundBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(foundBounty)
        })
    })

    // Get by Class
    bountyRouter.get("/search/class", (req, res, next) => {
        Bounty.find(
            {class: req.query.class},
            (err, bounties) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(bounties)
        })
    })
    
    // Post Bounty
    bountyRouter.post("/", (req, res, next) => {
        const newBounty = new Bounty(req.body)
        newBounty.save((err, savedBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedBounty)
        })
    })
    
    // Delete Bounty
    bountyRouter.delete("/:bountyId", (req, res, next) => {
        Bounty.findOneAndDelete(
            {_id: req.params.bountyId},
            (err, deletedBounty) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(`Successfully deleted ${deletedBounty.firstName} ${deletedBounty.lastName} from the bounties list`)
            })
        })
    
    // Update Bounty
    bountyRouter.put("/:bountyId", (req, res, next) => {
        Bounty.findOneAndUpdate(
            {_id: req.params.bountyId},
            (req.body),
            {new: true},
            (err, updatedBounty) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedBounty)
        })
    })

    module.exports = bountyRouter
