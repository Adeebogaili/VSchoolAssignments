const express = require("express")
const app = express()

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]

// Get All
app.get("/inventoryItems", (req, res) => {
    res.send(inventoryItems)
})

// Get by Type
app.get("/inventoryItems/search", (req, res) => {
    const type = req.query.type
    if (!type) {
        return res.status(400).send({ error: "Invalid type" });
    }
    const filteredItems = inventoryItems.filter(item => item.type === type)
    if (!filteredItems.length) {
        return res.status(404).send({ error: "No items found for the specified type" });
    }
    res.send(filteredItems)
})

// Get by Price
app.get("/inventoryItems/price", (req, res) => {
    const minPrice = parseInt(req.query.minPrice) || 0;
    const maxPrice = parseInt(req.query.maxPrice) || 1000000;
    const filteredItems = inventoryItems.filter(item => item.price >= minPrice && item.price <= maxPrice)
    if (!filteredItems.length) {
        return res.status(404).send({ error: "No items found for the specified price range" });
    }
    res.send(filteredItems)
})


const port = process.env.Port || 8100
app.listen(port, () => {
    console.log(`The server is running on port ${port}`)
})