const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Inventory Blueprint
const inventorySchema = new Schema({
    product: {
        type: String,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number, 
        required: true
    },
    saleValue: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Inventory", inventorySchema)