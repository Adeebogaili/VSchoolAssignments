const express = require("express")
const inventoryRouter = express.Router()
const Inventory = require("../models/inventory")

// Get all Inventory
inventoryRouter.get("/", (req, res, next) => {
    Inventory.find((err, inventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventory)
    })
})

// Get one item 
inventoryRouter.get("/:inventoryId", (req, res, next) => {
    Inventory.findOne({_id: req.params.inventoryId}, (err, item) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(item)
    })
})

// Post one item to the inventory
inventoryRouter.post("/", (req, res, next)=> {
    const newItem = new Inventory(req.body)
    newItem.save((err, savedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedItem)
    })
})

// Delete an item from the inventory
inventoryRouter.delete("/:inventoryId", (req, res, next) => {
    Inventory.findOneAndDelete(
        {_id: req.params.inventoryId}, 
        (err, deletedItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deletedItem.product} from the Inventory`)
    })
})

// Update an item from the Inventory
inventoryRouter.put("/:inventoryId", (req, res, next) => {
    Inventory.findOneAndUpdate(
        {_id: req.params.inventoryId}, // find the item to update
        (req.body), //update the object of the item
        {new: true}, // send back the updated item please
        (err, updatedItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedItem)
    })
})

module.exports = inventoryRouter