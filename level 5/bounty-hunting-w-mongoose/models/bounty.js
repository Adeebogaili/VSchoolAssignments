const mongoose = require("mongoose")
const Schema = mongoose.Schema

// bounty BluePrint
const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    living: {
        type: Boolean,
        required: true
    },
    class: {
        type: String,
            required: true
    },
    bounty: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Bounty", bountySchema)