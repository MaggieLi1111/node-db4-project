const express = require('express')
const recipeRouter = require("./recipes/recipe-router")

const server = express()

server.use(express.json())
server.use('/api/recipes', recipeRouter)

server.use((err, req, res, next) => {
    res.status(500).json({
        status: 500,
        message: err.message,
        stack: err.stack
    })
})

module.exports = server