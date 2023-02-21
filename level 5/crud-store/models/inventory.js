const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Inventory Blueprint
const inventorySchema = new Schema({
    product: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    salePrice: {
        type: Number,
        required: true
    }
},
{timestamps: true}
)

module.exports = mongoose.model("Inventory", inventorySchema)